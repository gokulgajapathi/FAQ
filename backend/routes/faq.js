import Router from 'express';
import { translateTo, supportedLanguages } from '../utils/utils.js';
import { faqModel } from '../database/db.js';
import { sanitize } from '../utils/sanitize.js';
import { cacheMiddleware } from '../middlewares/cacheMiddleware.js';
import { redisClient } from '../utils/redis.js';


export const faqRouter = Router();




faqRouter.post("/add-faq", async (req, res) => {
    const { _id, question, answer } = req.body;
    console.log(req.body);
    
    try {
        const sanitizedAnswer = sanitize(answer);

        const translatedQuestions = await translateTo(question);
        const tranlatedAnswers = await translateTo(sanitizedAnswer);

        const translations = {};
        for (const lang of supportedLanguages) {
            translations[lang] = {
                question: translatedQuestions[lang],
                answer: tranlatedAnswers[lang],
            }
        }

        await faqModel.create({
            faq_id:_id,
            question,
            answer,
            translations
        })
        res.status(200).json({
            message: "FAQ added successfully"
        })
        return;
    } catch (e) {
        res.status(500).json({
            message: "Error adding FAQ" + e,
        })
        return;
    }
})

faqRouter.get("/get-faq", cacheMiddleware('faq'), async (req, res)=>{
    const lang = req.query.lang;

    try {
        const faqs = await faqModel.find({});
        const translatedFAQS = faqs.map(faq => ({
            _id: faq.faq_id,
            question: faq.translations[lang]?.question || faq.question,
            answer: faq.translations[lang]?.answer || faq.answer,
        }));

        await redisClient.set(`faq:${lang}`, JSON.stringify(translatedFAQS),{
            EX: 10,
        });

        res.status(200).json({
            translatedFAQS
        });
        return;
    } catch(e) {
        res.status(500).json({
            message: "Error fetching FAQs "+e,
        });
        return;
    }
})


faqRouter.delete("/delete-faq/:id", async (req, res)=> {
    const faq_id = req.params.id;
    console.log("Backend", faq_id);
    
    try {
        const response = await faqModel.findOne({faq_id});
        console.log(response);
        
        if(response) {
            await faqModel.deleteOne({faq_id});
            res.status(200).json({
                message: "Delete success"
            })
            return;
        } else {
            res.status(400).json({
                message: "No such reponse exists"
            })
            return;
        }
    } catch(e) {
        res.status(500).json({
            message: "Error deleting response "+e,
        })
        return
    }
})



