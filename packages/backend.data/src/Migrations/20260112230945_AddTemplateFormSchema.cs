using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Data.src.Migrations
{
    /// <inheritdoc />
    public partial class AddTemplateFormSchema : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "FormSchemaJson",
                table: "PdfTemplates",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FormSchemaJson",
                table: "PdfTemplates");
        }
    }
}
