const { userservice } = require("../services");

const addUser = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const user = await userservice.addUser(body);
    res.status(201).json({
      message: "user Created success",
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};


const getuser = async (req, res) => {
    const user = await userservice.getuser();
  
    console.log(user, "get");
  
    res.status(200).json({
      message: "user get success",
      data: user,
    });
  };
  


  const deleteuser = async (req, res) => {

  
    let id = req.params.id;
  
    const user = await userservice.deleteuser(id);
  
  
    console.log(user, "delete");
  
    res.status(200).json({
      message: "user delete success",
      data: user,
    });
  };  
  
module.exports = { addUser,getuser,deleteuser};
