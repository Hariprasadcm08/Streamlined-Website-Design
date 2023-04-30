const Admin = require("../models/adminModel");

const getAdminData = async (req, res) => {
    try {
        let admin = await Admin.find().lean().exec();
        return res.status(200).send({ getAdminData: admin })
    } catch (error) {
        console.log(error)

        return res.status(500).send({ message: error })

    }
}


const postAdminData = async (req, res) => {
    let email=req.body.email;
    let pwd=req.body.pwd;

    try {
        let admin = await Admin.findOne({ email: email, pwd: pwd });
        // console.log(admin.length)
        if (admin) {
            return res.status(200).send("Admin login")
        }
        else {
            return res.status(401).send("Email or password is incorrect")

        }
    } catch (error) {
        return res.status(500).send({message:error.message})
    }



}

module.exports = {
    getAdminData,
    postAdminData,
}