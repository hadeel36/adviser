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
    /**
     * Send an email when the contact from is submitted
     */
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
}

};


