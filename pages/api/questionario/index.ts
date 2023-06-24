import questoes from "@/pages/api/bancoDeQuestoes"

export default(req, res) => {
    res.status(200).json(questoes.map(questao => questao.id))
}