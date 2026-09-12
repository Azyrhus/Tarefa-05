var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => Results.Ok(new
{
    projeto = "GitHub Actions Marketplace Demo",
    status = "online",
    mensagem = "Pipeline CI/CD funcionando!"
}));

app.MapGet("/health", () => Results.Ok(new
{
    status = "healthy"
}));

app.Run();

public partial class Program { }
