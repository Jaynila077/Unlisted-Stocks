export default function owner_company (Sequelize, DataTypes) {
    const OwnerCompany = Sequelize.define("owner_company", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        owner_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        company_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },{
        paranoid: true,
        tableName: "owner_companies",
    });

    owner_company.associate = (models) => {
        owner_company.belongsTo(models.user, {
            foreignKey: "owner_id",
        });
        owner_company.belongsTo(models.company, {
            foreignKey: "company_id",
        });
    }

    return OwnerCompany;
}