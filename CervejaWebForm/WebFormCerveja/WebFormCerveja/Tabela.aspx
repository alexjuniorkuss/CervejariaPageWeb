<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="Tabela.aspx.cs" Inherits="WebFormCerveja.tabela" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link rel="stylesheet" href="Content/css/tabela.css">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="body" runat="server">
    <main>
    <div class="cabecalho-crud">
        <h1>Produtos</h1>
        <a href="Default.aspx" class="botao-principal">Voltar</a>
    </div>
    <hr />
        <asp:GridView ID="dgvCervejas" runat="server"></asp:GridView>
    
</main>
</asp:Content>
