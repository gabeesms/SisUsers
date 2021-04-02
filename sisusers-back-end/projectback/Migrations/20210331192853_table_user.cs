using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SisUserBackEnd.Migrations
{
    public partial class table_user : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AuditLog",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TableName = table.Column<string>(nullable: false),
                    DateTime = table.Column<DateTime>(nullable: false),
                    KeyValues = table.Column<string>(nullable: false),
                    OldValues = table.Column<string>(nullable: true),
                    NewValues = table.Column<string>(nullable: false),
                    UsuarioId = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AuditLog", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nome = table.Column<string>(maxLength: 100, nullable: false),
                    email = table.Column<string>(maxLength: 50, nullable: true),
                    telefone = table.Column<string>(maxLength: 14, nullable: true),
                    cep = table.Column<string>(maxLength: 9, nullable: true),
                    logradouro = table.Column<string>(maxLength: 100, nullable: true),
                    numero = table.Column<string>(maxLength: 5, nullable: true),
                    complemento = table.Column<string>(maxLength: 50, nullable: true),
                    bairro = table.Column<string>(maxLength: 20, nullable: true),
                    localidade = table.Column<string>(maxLength: 20, nullable: true),
                    uf = table.Column<string>(maxLength: 2, nullable: true),
                    dataCadastro = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AuditLog");

            migrationBuilder.DropTable(
                name: "User");
        }
    }
}
