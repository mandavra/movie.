const { movieticketservice } = require("../services");

const addmovieticket = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const movieticket = await movieticketservice.addmovieticket(body);
    res.status(201).json({
      message: "movieticket Created success",
      data: movieticket,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};


const getmovieticket = async (req, res) => {
    const movieticket = await movieticketservice.getmovieticket();
  
    console.log(movieticket, "get");
  
    res.status(200).json({
      message: "movieticket get success",
      data: movieticket,
    });
  };
  


  const deletemovieticket = async (req, res) => {
    // console.log(req.params.id);
  
    let id = req.params.id;
  
    const movieticket = await movieticketservice.deletemovieticket(id);
  
  
    console.log(movieticket, "delete");
  
    res.status(200).json({
      message: "movieticket delete success",
      data: movieticket,
    });
  };  
  
module.exports = { addmovieticket,getmovieticket,deletemovieticket};
