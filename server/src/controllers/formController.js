const Form = require("../models/formModel");

const getContactData = async (req, res) => {
    try {
        let about = await Form.find().lean().exec();
        return res.status(200).send({ getFormtData: about })
    } catch (error) {
        return res.status(500).send({ message: error })

    }
}


const postContactData = async (req, res) => {
    try {
        let about = await Form.create(req.body);
        return res.status(201).send({ postFormData: about })
    } catch (error) {
        return res.status(500).send({ message: error })

    }
}

module.exports = {
    getContactData,
    postContactData,
}