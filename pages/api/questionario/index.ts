import questoes from "@/pages/api/bancoDeQuestoes"
import { embaralhar } from "@/functions/arrays"

export default function questionario(req, res) {
    const ids = questoes.map(questao => questao.id)
    res.status(200).json(embaralhar(ids))
}