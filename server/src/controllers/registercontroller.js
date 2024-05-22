const register = require('../modals/register');

const registeruser = async (req,res) => {

    try {
        const data= req.body;
        const mdata = new register(data);
        const response = await mdata.save();

        res.status(200).json({message : "registered succesfully"})
    }

    catch(err) {
        console.log(err);
    }
}

module.exports = registeruser;