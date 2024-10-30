$(document).ready(function () {
    document.querySelector("header button").addEventListener("click", function () {
        $("#lista").slideDown();
    })

    $("form").on("submit", function (e) {
        e.preventDefault();

        const novaTarefa = $("#tarefa-input").val();
        console.log(novaTarefa)

        const novoItem = $(`<ul>${novaTarefa}</ul>`);
        $(`<hr>`).appendTo(novoItem);
        $(novoItem).appendTo("li");
        $("#tarefa-input").val("");

        $(novoItem).on("click", function () {
            $(novoItem).css({ "text-decoration": "line-through" })
        })
    })
}) 