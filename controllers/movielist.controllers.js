const { movielistservice } = require("../services");

const addmovielist = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const movielist = await movielistservice.addmovielist(body);
    res.status(201).json({
      message: "movielist Created success",
      data: movielist,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};


const getmovielist = async (req, res) => {
    const movielist = await movielistservice.getmovielist();
  
    console.log(movielist, "get");
  
    res.status(200).json({
      message: "movielist get success",
      data: movielist,
    });
  };
  


  const deletemovielist = async (req, res) => {

  
    let id = req.params.id;
  
    const movielist = await movielistservice.deletemovielist(id);
  
  
    console.log(movielist, "delete");
  
    res.status(200).json({
      message: "movielist delete success",
      data: movielist,
    });
  };  
  
module.exports = { addmovielist,getmovielist,deletemovielist};
