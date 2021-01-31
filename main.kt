fun main(){
    passGen()
}

fun fraseInversa(frase: String) = print(frase.takeLast(2))

fun passGen() {

    val lista_num = listOf(0,1,2,3,4,5,6,7,8,9)
    var c: Int = 0

    // 1 digito
    lista_num.forEach { num -> println(num) }

    // 2 digito
    lista_num.forEach { num ->
        var i: Int = 0
        while (i<lista_num.size) {
            println("$num${lista_num[i]}")
            i++
        }
    }

    // 3 digito
    lista_num.forEach { num ->
        var i: Int = 0
        while (i<lista_num.size) {
            var j: Int = 0
            while (j<lista_num.size) {
                println("$num${lista_num[i]}${lista_num[j]}")
                j++
            }
            i++
        }
    }

    // 4 digito
    lista_num.forEach { num ->
        var i: Int = 0
        while (i<lista_num.size) {
            var j: Int = 0
            while (j<lista_num.size) {
                var k: Int = 0
                while (k<lista_num.size) {
                    println("$num${lista_num[i]}${lista_num[j]}${lista_num[k]}")
                    k++
                }
                j++
            }
            i++
        }
    }
}

fun passGenv2(){

}