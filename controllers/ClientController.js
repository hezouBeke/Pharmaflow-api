const ClientService = require("../services/Clientservice");



exports.create = async (req, res, next) => {
  try{
    const client = await ClientService.createClient(req.body);
    res.json({ message: "Client ajouté avec succès ✅", client });

  }catch (err) {
    next(err);
  }
};

exports.get = async (req, res, next) => {
    try{
        const clients = await ClientService.getAllClients();
        res.json(clients);

    }catch (err) {
        next(err);
    };
};


exports.getOne = async (req, res, next ) => {
    try{
       const client = await ClientService.getClientById(req.params.id);
       res.json(client);
    }catch (err) {
        next(err);
    };
};

exports.update = async (req, res, next ) => {
    try{
        const client = await ClientService.updateClient(req.params.id, req.body);
        res.json({ message: "Client mis à jour avec succès ✅", client });
    }catch (err) {
       next(err);
   };
}

exports.delete = async (req, res, next) => {
    try{
        const client = await ClientService.deleteClient(req.params.id);
        res.json({ message: "Client supprimé avec succès ✅", client });
    }catch (err) {
         next(err);
    };
};