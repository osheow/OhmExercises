export function matches(name, s){
    const grammars = {
        canadianPostalCode : `G{
            code = eh digit eh " " digit eh digit
            eh = "A".."C" | "E" | "G".."H" | "J".."N" | "P" |  "R".."T" | "V".."Z"
        }`,
        visa: `G{
            visa = "4" digit digit digit
        }`,
        floatingPoint: String.raw`G{
            float = digit* "." digit+ "e" ("+" | "-") digit+
            point = digit* "." digit+
        }`,
        };
        return ohm.grammar(grammars[name]).match(s).succeeded();
}

