
module.exports = function (connection, DataTypes) {

    const Vendor = connection.define("Vendor", {
       firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]

            }
          },
        vendorType :{
              type:DataTypes.STRING,
              allowNull:false,
              validate:{
                  len:[1]
              }
          },
          vendorName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
          },
        description :{
            type:DataTypes.TEXT,
            // allowNull:false,
            // validate:{
            //     len:[1]
            // }
        },
       fullName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        // website: {
        //     type: DataTypes.STRING,
        //     validate: {
        //         isUrl : true
        //     }
        // },
        email: {
            type: DataTypes.STRING,
            // isUnique :true,
            allowNull: false
            // validate: {
            //     isEmail : true
            // }
        },
        State: {
            type: DataTypes.STRING,
            // isUnique :true,
            allowNull: false
        },
        City: {
            type: DataTypes.STRING,
            // isUnique :true,
            allowNull: false
          
        },
        zip: {
            type: DataTypes.INTEGER,
            validate: {
                len: [1, 5]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Vendor;
};