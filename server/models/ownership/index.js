export default function ownership (Sequelize, DataTypes) {
    const Ownership = Sequelize.define("ownership", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        company_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        name : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        share_percentage: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        is_ceo: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        is_cofounder: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        is_manager: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        is_director: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        other_role: {
            type: DataTypes.STRING,
            allowNull: true,
        },
         
    },{
        paranoid: true,
        tableName: "ownerships",
    });

    ownership.associate = (models) => {
        ownership.belongsTo(models.company, {
            foreignKey: "company_id",
        });
    }

    return Ownership;
}