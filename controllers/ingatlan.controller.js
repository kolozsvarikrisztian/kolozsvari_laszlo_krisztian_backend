const db = require('../models');
const Ingatlan = db.Ingatlan;
const Kategoria = db.Kategoria;

exports.findAll = (req, res) => {
    Ingatlan.findAll({include: Kategoria})
    .then(data => {
        res.send(data);
    })
};

exports.create = (req, res) => {
    if (!req.body.kategoria || !req.body.tehermentes || !req.body.ar) {
        res.status(400).send("Hiányos adatok!");
        return;
    }

    const ujIngatlan = {
        kategoria: req.body.kategoria,
        leiras: req.body.leiras ? req.body.leiras : null,
        hirdetesDatuma: req.body.hirdetesDatuma ? req.body.hirdetesDatuma : null,
        tehermentes: req.body.tehermentes,
        ar: req.body.ar,
        kepUrl: req.body.kepUrl ? req.body.kepUrl : null
    };

    Ingatlan.create(ujIngatlan)
    .then(data => {
        res.status(201).send({id: data.id})
    })
    .catch(err => {
        res.status(500).send("Szerver hiba történt: " + err)
    })
};

exports.delete = (req, res) => {
    const id = req.params.id;
    
    Ingatlan.destroy({where: {id: id}})
    .then(num => {
        if (num === 1) {
            res.status(204).send();
        }
        else {
            res.status(404).send("Az ingatlan nem létezik.")
        }
    })
    .catch(err => {
        res.status(500).send("Szerver hiba történt: " + err)
    })
};