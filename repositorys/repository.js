const { User, Tarefa } = require("../models/models")



//repostory usuario
async function findUser(id) {
    const user = await User.findOne({ where: { id: id } })
    return user;
}


// Função para criar um usuário
async function criarUsr(id, nome, email) {
    try {
        const user = await User.create({
            id,
            nome,
            email
        });
        console.log('Usuário criado:', user);
    } catch (err) {
        console.error('Erro ao criar usuário:', err);
    }
}


//repository tarefas
async function findTarefa(id) {
    const tarefa = await Tarefa.findOne({ where: { id: id } })
    return tarefa;
}


// Função para criar um usuário
async function criarTarefa(id, descricao, setor, status, prioridade, fk_usuario_id) {
    try {
        const tarefa = await Tarefa.create({
            id,
            descricao,
            setor,
            status,
            prioridade,
            fk_usuario_id

        });
        console.log('tarefa criada:', Tarefa);
    } catch (err) {
        console.error('Erro ao criar tarefa:', err);
    }
}


module.exports = {criarTarefa, criarUsr, findTarefa, findUser}


