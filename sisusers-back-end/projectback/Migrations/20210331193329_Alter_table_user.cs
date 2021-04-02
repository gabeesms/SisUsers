using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SisUserBackEnd.Migrations
{
    public partial class Alter_table_user : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "dataCadastro",
                table: "User");

            migrationBuilder.AddColumn<DateTime>(
                name: "registroDate",
                table: "User",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "registroDate",
                table: "User");

            migrationBuilder.AddColumn<DateTime>(
                name: "dataCadastro",
                table: "User",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
