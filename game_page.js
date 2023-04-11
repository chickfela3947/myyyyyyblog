player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ": ";
document.getElementById("player2_name").innerHTML = player2_name + ": ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;


function send() {
    g1 = document.getElementById("word").value;
    word = g1.toLowerCase();


    charAt1 = word.charAt(1);

    v2 = Math.floor(word.length / 2);
    charAt2 = word.charAt(v2);

    v3 = word.length - 1;
    charAt3 = word.charAt(v3);


    remove1 = word.replace(charAt1, "_");
    remove2 = remove1.replace(charAt2, "_");
    remove3 = remove2.replace(charAt3, "_");

    A1 = "<h4> Question." + remove3 + "</h4>";
    A2 = "<br> Answer : <input type= 'text' id='input_check_box'>";
    A3 = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

    row = A1 + A2 + A3;

    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
question_turn = "player1";
answer_turn = "player2";
function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lower case - " + answer);
    if (answer == word) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }

    if (answer_turn == "player1") {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }
    else {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }

    document.getElementById("output").innerHTML = "";
}