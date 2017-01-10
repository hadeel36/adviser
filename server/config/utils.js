var nodemailer = require('nodemailer');
// var transporter = nodemailer.createTransport();


var multer = require('multer');
var storage = multer.diskStorage({ 
    destination: function (req, file, cb) {
        cb(null, './client/uploads/');
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
    }
});
var upload = multer({ 
    storage: storage
    }).single('file');


module.exports = {
  
  uploadImg: function(req, res) {
        upload(req,res,function(err){
            if(err){
                res.json({error_code:1,err_desc:err});
                return;
            }
            res.send({error_code:0,err_desc:null, file:req.file});
        });
    },
    sendMail: function(req, res) {
    var transporter = nodemailer.createTransport({
        service: 'Yahoo',
        auth: {
            user: 'hadyl.o@yahoo.com',
            pass: 'ryxmhssyilcfzcub'
        }
    });
    var data = req.body;
 
    transporter.sendMail({
        from: 'hadyl.o@yahoo.com',
        to: 'hadylgk87@gmail.com',
        subject: 'Message from ' + data.destinationName,
        text: data.contactMsg
    });
    console.log(data);
    res.json(data);
},

  submitMail: function(req, res) {
    var transporter = nodemailer.createTransport({
        service: 'Yahoo',
        auth: {
            user: 'hadyl.o@yahoo.com',
            pass: 'ryxmhssyilcfzcub'
        }
    });
    var data = req.body;
 
    transporter.sendMail({
        from: data.contactEmail,
        to: 'hadylgk87@gmail.com',
        subject: 'Message from ' + data.name,
        text: data.text
    });
    console.log('hiiiiiiiiiiiii');
    res.json(data);
    console.log('hiiiiiiiiiiiii');
    res.json(data);


    // // Create a SMTP transport object
    // var transport = nodemailer.createTransport("SMTP", {
    //         service: 'Gmail',
    //         auth: {
    //             user: "test.nodemailer@gmail.com",
    //             pass: "Nodemailer123"
    //         }
    //     });

    // console.log('SMTP Configured');

    // // Message object
    // var message = {

    //     // sender info
    //     from: req.body.contactEmail,

    //     // Comma separated list of recipients
    //     to: '"Receiver Name" <hadylgk87@gmail.com>',

    //     // Subject of the message
    //     subject: 'Nodemailer is unicode friendly ✔', 

    //     // plaintext body
    //     text: 'Hello to myself!',

    //     // HTML body
    //     html:'<p><b>Hello</b> to myself <img src="cid:note@node"/></p>'+
    //          '<p>Here\'s a nyan cat for you as an embedded attachment:<br/></p>'
    // };

    // console.log('Sending Mail');
    // transport.sendMail(message, function(error){
    //   if(error){
    //       console.log('Error occured');
    //       console.log(error.message);
    //       return;
    //   }
    //   console.log('Message sent successfully!');

    //   // if you don't want to use this transport object anymore, uncomment following line
    //   //transport.close(); // close the connection pool
    // });
}

};

