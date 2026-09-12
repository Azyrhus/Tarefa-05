FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY ["MarketplaceActionsDemo.csproj", "."]
RUN dotnet restore "MarketplaceActionsDemo.csproj"

COPY . .
RUN dotnet publish "MarketplaceActionsDemo.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
EXPOSE 8080

COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "MarketplaceActionsDemo.dll"]
