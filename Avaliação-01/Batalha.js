var guerreiro = /** @class */ (function () {
    function guerreiro(id, descricao, forca_de_ataque, life) {
        this.id = id;
        this.descricao = descricao;
        this.forca_de_ataque = forca_de_ataque;
        this.life = life;
    }
    guerreiro.prototype.estaEliminado = function () {
        var result = true;
        if (this.life >= 0) {
            var result_1 = false;
            return result_1;
        }
        return result;
    };
    guerreiro.prototype.defenderAtaque = function (valorAtaque) {
        var eliminado = this.forca_de_ataque - valorAtaque;
        return eliminado;
    };
    return guerreiro;
}());
var base = /** @class */ (function () {
    function base(id, localizacao_x, localizacao_y, dano) {
        this.id = id;
        this.localizacao_x = localizacao_x;
        this.localizacao_y = localizacao_y;
        this.dano = dano;
    }
    base.prototype.estaEliminado = function () {
        var result = true;
        if (this.dano >= 100) {
            var result_2 = false;
            return result_2;
        }
        return result;
    };
    base.prototype.defenderAtaque = function (valorAtaque) {
        var dano_porcentagem = this.dano - valorAtaque;
        return dano_porcentagem;
    };
    return base;
}());
var CenarioDeBatalha = /** @class */ (function () {
    function CenarioDeBatalha() {
        this.Dano = [];
        this.Defesa = [];
    }
    CenarioDeBatalha.prototype.Add_Dano = function (value) {
        this.Dano.push(value);
    };
    CenarioDeBatalha.prototype.Add_Defesa = function (value) {
        this.Defesa.push(value);
    };
    CenarioDeBatalha.prototype.get = function (index) {
        return this.Defesa[index];
    };
    return CenarioDeBatalha;
}());
var Teste = /** @class */ (function () {
    function Teste() {
    }
    Teste.prototype.testAll = function () {
        var CenarioDeBatalh = new CenarioDeBatalha;
        var Guerra = new guerreiro("Bar", "Atirador", 10, 100);
        console.log(Guerra);
        CenarioDeBatalh.Add_Dano(new guerreiro("Bar", "Atirador", 10, 100));
        CenarioDeBatalh.get(1);
    };
    return Teste;
}());
var teste = new Teste;
console.log(teste.testAll());
