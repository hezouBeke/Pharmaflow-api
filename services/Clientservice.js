const Client = require('../models/Client');


exports.createClient = async (clientData) => {
    const client = new Client({ ...clientData });
    await client.save();
    return client;
};

exports.getAllClients = async () => {
    const clients = await Client.find();
    if(!clients) throw new Error("Aucun client trouvé");
    return clients;
};

exports.getClientById = async (id) => {
    const client = await Client.findById(id);
    if(!client) throw new Error("Client introuvable");
    return client;
};

exports.updateClient = async (id, updateData) => {
  const client = await Client.findByIdAndUpdate(id, updateData, { new: true });
  if(!client) throw new Error("Client introuvable");
  return client;
};

exports.deleteClient = async (id) => {
    const client = await Client.findByIdAndDelete(id);
    if(!client) throw new Error("Client introuvable");
    return client;
};
