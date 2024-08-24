const axios = require('axios');
const { Endereco } = require('../Endereco');

// Método para buscar e salvar endereço
const buscarESalvarEndereco = async (req, res) => {
    const { cep } = req.params;

    if (!cep) {
        return res.status(400).json({ error: 'cep necessário' });
    }
    //bloco try/catch caso ocorra algum erro durante a compilação
    try {
        // Busca o endereço na api através do cep
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const enderecoData = response.data;

        if (enderecoData.erro) {
            return res.status(404).json({ error: 'O cep pesquisado não foi encontrado' });
        }

        // Método para criar ou atualizar o cep no banco de dados
        const endereco = await Endereco.upsert({
            firstName: enderecoData.firstName,
            lastName: enderecoData.lastName,
            Id: enderecoData.Id,
            Cep: enderecoData.Cep,
            Logradouro: enderecoData.Logradouro,
            Numero: enderecoData.Numero,
            Complemento: enderecoData.Complemento,
            Bairro: enderecoData.Bairro,
            Cidade: enderecoData.Cidade,
            Estado: enderecoData.Estado,
            MunicipioIBGE: enderecoData.MunicipioIBGE,
        });

        res.status(200).json({ message: 'Endereço salvo com sucesso', endereco });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar o endereço' });
    }
};

module.exports = {
    buscarESalvarEndereco,
};
