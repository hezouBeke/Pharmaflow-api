const Client = require('../models/Client');
const AppError = require('../utils/AppError');


exports.createClient = async (clientData) => {
    const client = new Client({ ...clientData });
    await client.save();
    return client
};

exports.getAllClients = async () => {
    const clients = await Client.find();
    return clients;
};

exports.getClientById = async (id) => {
    const client = await Client.findById(id);
    if(!client) throw new AppError("Client introuvable", 404);
    return client;
};

exports.updateClient = async (id, updateData) => {
  const client = await Client.findByIdAndUpdate(id, updateData, { new: true });
  if(!client) throw new AppError("Client introuvable", 404);
  return client;
};

exports.deleteClient = async (id) => {
    const client = await Client.findByIdAndDelete(id);
    if(!client) throw new AppError("Client introuvable", 404);
    return client;
};
