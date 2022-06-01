module.exports = {
    //separando o objeto
     index(req, res){
        const roomId = req.params.room;
        const question = req.params.question;
        const action = req.params.action;
        const password = req.body.password;

        console.log(`room = ${roomId}, question = ${question}, action = ${action}, password = ${password}`)
     }
}