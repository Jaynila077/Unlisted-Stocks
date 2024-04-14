export default function company (Sequelize, DataTypes) {
    const Company = Sequelize.define("company", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        reg_no: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        reg_date:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        website: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        socials: {
            type: DataTypes.JSON,
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        logo: {
            type: DataTypes.File,
            allowNull: true,
        },
        licence_id: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        free_equity: {
            type: DataTypes.float,
            allowNull: false,
        }
    },{
        paranoid: true,
        tableName: "companies",
    });

    company.associate = (models) => {
        company.hasMany(models.ownership, {
            foreignKey: "company_id",
            as: "ownerships",
        });
        company.hasMany(models.owner_company, {
            foreignKey: "company_id",
            as: "owner_companies",
        });
    };

    return Company;
    }