// Purpose: DTO representing a single PDF form field schema entry.

using System.Collections.Generic;

namespace Backend.Core.DTOs;

public record PdfFormFieldSchemaDto(
    string Name,
    string Type,
    IEnumerable<string>? Options,
    bool Required
);
