using Microsoft.EntityFrameworkCore.Migrations;

namespace CRUDAPI.Migrations
{
    public partial class criacaoBDv2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Date",
                table: "Pessoas",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Pessoas",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "EndTime",
                table: "Pessoas",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Legislation",
                table: "Pessoas",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "StartTime",
                table: "Pessoas",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Pessoas",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Type",
                table: "Pessoas",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "VariableDates",
                table: "Pessoas",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Date",
                table: "Pessoas");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "Pessoas");

            migrationBuilder.DropColumn(
                name: "EndTime",
                table: "Pessoas");

            migrationBuilder.DropColumn(
                name: "Legislation",
                table: "Pessoas");

            migrationBuilder.DropColumn(
                name: "StartTime",
                table: "Pessoas");

            migrationBuilder.DropColumn(
                name: "Title",
                table: "Pessoas");

            migrationBuilder.DropColumn(
                name: "Type",
                table: "Pessoas");

            migrationBuilder.DropColumn(
                name: "VariableDates",
                table: "Pessoas");
        }
    }
}
