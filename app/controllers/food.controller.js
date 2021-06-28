const db = require("../config/db.config.js");
const Op = require('sequelize').Op;
const Food = db.food;
class FoodController {

    static create = async (req, res) => {
        const createFood = await Food.build({  
            name: req.body.name,
            price: req.body.price,
            outlet: req.body.outlet,
            description: req.body.description,
            image_url: req.body.image_url,            
         });
        await createFood.save()
        if(!createFood){
            return res.status(200).send({
                status: 404,
                message: 'No data found'   
            });
        }
        res.status(200).send({
            status: 200,
            message: 'Data Save Successfully' 
        });
    } 
    catch(error){
        console.log(error)
        return res.status(400).send({
            message:'Unable to insert data',
            errors: error,
            status: 400
        });
    }

    static showAll = async (req, res) => {
        const keywords = req.body.keywords;
        const condition = keywords ? { name: { [Op.like]: `%${keywords}%` } } : null;
        const foods = await Food.findAll({ where: condition })
        if(!foods){
            return res.status(200).send({
                status: 404,
                message: 'No data found'   
            });
        }
        res.status(200).send({
            status: 200,
            message: 'Data find Successfully',
            data: foods
        });
    } 
    catch(error){
        console.log(error)
        return res.status(400).send({
            message:'Unable to find data',
            errors: error,
            status: 400
        });
    }

    static show = async (req, res) => {
        const food = await Food.findByPk(req.params.foodId)
        if(!food){
            return res.status(200).send({
                status: 404,
                message: 'No data found'   
            });
        }
        res.status(200).send({
            status: 200,
            message: 'Data find Successfully',
            data: food
        });
    } 
    catch(error){
        console.log(error)
        return res.status(400).send({
            message:'Unable to find data',
            errors: error,
            status: 400
        });
    }

    static update = async (req, res) => {
        const id = req.params.foodId;
        const updateFood = await Food.update(req.body, {
                                    where: { id: id }
                                });
        if(updateFood == 0){
            return res.status(200).send({
                status: 404,
                message: 'No data found'   
            });
        }
        res.status(200).send({
            status: 200,
            message: 'Data Update Successfully'
        });
    } 
    catch(error){
        console.log(error)
        return res.status(400).send({
            message:'Unable to update data',
            errors: error,
            status: 400
        });
    }

    static destroy = async (req, res) => {
        const id= req.params.foodId;
        const destroyFood = await Food.destroy({
            where: { id: id }
        });
        if(!destroyFood){
            return res.status(200).send({
                status: 404,
                message: 'No data found'   
            });
        }
        res.status(200).send({
            status: 200,
            message: 'Data Delete Successfully' 
        });
    } 
    catch(error){
        console.log(error)
        return res.status(400).send({
            message:'Unable to Delete data',
            errors: error,
            status: 400
        });
    }
}
module.exports = FoodController