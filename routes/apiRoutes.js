var db = require("../models");

<<<<<<< HEAD
module.exports = function(app) {
  // Get all Vendors
  app.get("/api/vendors", function(req, res) {
    db.Vendor.findAll({}).then(function(dbVendors) {
      res.json(dbVendors);
    });
  });

   // Search functionality
  app.get("/api/vendors/:category/:search", function(req, res) {
    let search = req.params.category.search;
    console.log(search);
    db.Vendor.findAll({
      where: {
        vendorType: req.params.category,
        [Sequelize.Op.or]: [
          {name:       {[Sequelize.Op.like]: '%' + search + '%'}},
          {description: {[Sequelize.Op.like]: '%' + search + '%'}},
        ]
      }
     
    }).then(function(dbVendors) {
      res.json(dbVendors);
    });
  });

  // Create a new Vendor
  app.post("/api/Vendors", function(req, res) {
    db.Vendor.create(req.body).then(function(dbVendor) {
      res.json(dbVendor);
    });
  });

  // Delete an Vendor by id
  app.delete("/api/Vendors/:id", function(req, res) {
    db.Vendor.destroy({ where: { id: req.params.id } }).then(function(dbVendor) {
      res.json(dbVendor);
    });
=======
module.exports = function (app) {

  //display all vendors to the page
  app.get('/api/vendors', (req, res) => {
    Vendors.findAll().then((vendors) => res.json(vendors));
  });
  //search by vendor type
  app.get('/api/results/:vendorType', (req, res) => {
    Vendors.findById(req.params.vendorType).then(vendor => res.json(vendor));
  });
  //search by vendor price
  app.get('/api/results/:price', (req, res) => {
    Vendors.findById(req.params.price).then(vendor => res.json(vendor));
  });
  //create new vendor
  app.post('/api/newVendor', (req, res) =>{
    const newVendor = req.body;
    Vendors.create(vendor).then(() => res.json({success: true }))
>>>>>>> 2bfb0a2e66429f5246d02950868a9bd0f6ec0dc5
  });
  //vendor Profile 
  app.get('/api/vendorProfile/:vendorId', (req, res) => {
    Vendors.findById(req.params.vendorId).then(vendor => res.json(vendor));
  });
  //delete vendor profile
  app.delete('/api/vendorProfile/:vendorId', (req, res) =>{
    Vendors.destroy({ where: {id: req.params.vendorId}})
      .then((affectedRows) => res.json(affectedRows));
  })
};









// Get all examples
  // app.get("/api/examples", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
