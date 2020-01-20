const router = require('express').Router();
const { ItemModel, TypeModel, sequelize} = require('../bin/sequelize');
const paginate = require('jw-paginate');
/*
* Get all items
*/
router.get('/api/items', async (req, res) => {
        const modelItems = await ItemModel.findAll({include: [{
            model: TypeModel,
            as: "type"
        }]});
        const page = parseInt(req.query.page) || 1;
        const pageSize = 4;
        const pager = paginate(modelItems.length, page, pageSize);
        const items = modelItems.slice(pager.startIndex, pager.endIndex + 1);
    return  res.json({ pager, items });
});
/*
* Add new item
*/
router.post('/api/items', async (req, res) => {
    const [type,] = await TypeModel.findOrCreate({
        where: {
            name: req.body.type
        }
    });

    const item = await ItemModel.create({name: req.body.name});

    item.setType(type);
    return res.json({ item: { ...item.toJSON(), type } });
});
/*
* Edit current item
*/
router.put('/api/items/:id', async (req, res) => {
    await ItemModel
        .update(req.body, {
            returning: true,
            where: {id: req.params.id}
        });

    const type = await TypeModel.findOne({
        where: {
            id: req.body.type.id
        }
    });
    const updatedItem = await ItemModel.findOne({
        where: {id: req.params.id},
        include: [{
            model: TypeModel,
            as: "type"
        }]
    });

    updatedItem.setType(type);

    res.json({updatedItem: { ...updatedItem.toJSON(), type}});
});
/*
* Delete current item
*/
router.delete('/api/items/:id/remove', (req, res) => {
    ItemModel
        .destroy({
            where: {id: req.params.id}
        })
        .then(items => res.json({items}))
});
/*
* Get all types name for edit window
*/
router.get('/api/types', async (req, res) => {
    const types = await TypeModel.findAll();
    return  res.json({ types });
});
/*
* Get all types name and count for statistic
*/
router.get('/api/items/stat',async (req, res) => {
    const [stats,] = await sequelize.query("select t.name, count(i.id) as types_count from type t join item i on t.id = i.typeId group by t.name order by t.name asc");
    const page = parseInt(req.query.page) || 1;
    const pageSize = 3;
    const statsPager = paginate(stats.length, page, pageSize);
    const statsTypes = stats.slice(statsPager.startIndex, statsPager.endIndex + 1);
    return res.json({statsPager, statsTypes});
} );

module.exports = router;
