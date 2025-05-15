import type IReceitas from "@/interfaces/IReceitas";

export async function obterReceitas() {
    const url = 'https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json'

    const resposta = await fetch(url)

    const receitas: IReceitas[] = await resposta.json()

    return receitas
}