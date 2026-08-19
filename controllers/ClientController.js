const ClientService = require('../services/ClientService');



exports.create = async (req, res) => {
  try{
    const client = await ClientService.createClient(req.body);
    res.json({ message: "Client ajouté avec succès ✅", client });

  }catch (err) {
    res.status(500).json({ message: err.message }); 
};
}

exports.get = async (req, res) => {
    try{
        const clients = await ClientService.getAllClients();
        res.json(clients);

    }catch (err) {
        res.status(500).json({ message: err.message });
    };
};


exports.getOne = async (req, res) => {
    try{
       const client = await ClientService.getClientById(req.params.id);
       res.json(client);
    }catch (err) {
        res.status(500).json({ message: err.message });
    };
};

exports.update = async (req, res) => {
    try{
        const client = await ClientService.updateClient(req.params.id, req.body);
        res.json({ message: "Client mis à jour avec succès ✅", client });
    }catch (err) {
        res.status(500).json({ message: err.message });
   };
}

exports.delete = async (req, res) => {
    try{
        const client = await ClientService.deleteClient(req.params.id);
        res.json({ message: "Client supprimé avec succès ✅", client });
    }catch (err) {
        res.status(500).json({ message: err.message });
    };
};