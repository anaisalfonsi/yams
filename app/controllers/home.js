export default function(req, res){

    if(req.session.auth){

        res.redirect('/game');

        return;
    }
    
    res.render("home", { message : req.session.message });
}