module.exports = function(app, fs)
{
     app.get('/',function(req,res){
         res.render('index', {
             title: "Bootstrap Example"
         })
     });

    app.get('/about',function(req,res){
        res.render('about.html', {
            title: "Bootstrap Example"
        })
    });

    app.get('/contact',function(req,res){
        res.render('context.html', {
            title: "Bootstrap Example"
        })
    });
}
