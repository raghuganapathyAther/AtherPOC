// @desc Get Intent for a text input
// @route POST api/v1/predict
// @access Public
exports.redirectToRoute = (req,res,next) =>{
    res.status(400).json({ message:"No Text Given" });
}
// @desc Get Intent for a text input
// @route POST api/v1/predict/:text
// @access Public
exports.getPrediction = (req,res,next) =>{
    const inputString = req.params.text 
    if(inputString.toLowerCase().includes('navigate'||'navigate to')){
        actionType = "navigation",
        action = {
            destination : inputString.slice(inputString.indexOf('navigate')+'navigate'.length,).trim()
        }
    }
    if(inputString.toLowerCase().includes('add a stop at'||'add stop'||'add stop at')){
        actionType = "navigation",
        action = {
            navStop: inputString.slice(inputString.indexOf('stop')+'stop at'.length,).trim()
        }
    }
    if(inputString.toLowerCase().includes('reduce'||'decrease')){
        if(inputString.toLowerCase().includes('brightness')){
            actionType = "Reduce Brightness",
            action = {
                brightness: "Reduce brightness by 2 points"
            }
        }
    }
    res.status(200).json({ actionType,action });
}