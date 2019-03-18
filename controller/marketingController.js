const Marketing = require('../Schema/marketingSchema');
// const {db} = require('../config/database');
// const Sequelize = require('sequelize');

exports.post = (body, done) => {
    Marketing.create(body).then((newMarketing) => {
        if (newMarketing) {
            done(null, newMarketing);
        }
    }).catch((err) => {
        done(err);
    });
}

exports.getAll = (done) => {
    Marketing.findAll().then((getMarketing) => {
        if (getMarketing) {
            done(null, getMarketing);
        }
    }).catch((err) => {
        done(err);
    });
}

exports.getById = (id, done) => {
    Marketing.findOne({ where: { id: id } }).then((getMarketing) => {
        if (getMarketing) {
            Marketing.findAll({ where: { id: id } }).then((marketing) => {
                done(null, marketing)
            }).catch((err) => {
                done(err)
            })  
        }
        else {
            done({ message: "Id not found" })
        }
    })
}