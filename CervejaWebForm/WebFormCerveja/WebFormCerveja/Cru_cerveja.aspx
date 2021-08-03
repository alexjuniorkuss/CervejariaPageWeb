<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="Cru_cerveja.aspx.cs" Inherits="WebFormCerveja.cru_cerveja" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="Content/css/cad_cerveja.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="body" runat="server">
    <main>
        <div class="cabecalho-crud">
            <h1>Cervejas</h1>
            <a href="Default.aspx" class="botao-principal">Voltar</a>
        </div>
         <hr />
       <div>
            <div class="form-item">
                <label for="id">Id</label>
                <asp:TextBox ID="txtID" runat="server"></asp:TextBox>
            </div>
            <div class="form-item">
                <label for="nome">Cerveja</label>
                <asp:TextBox ID="txtNome" runat="server"></asp:TextBox>
            </div>
            <div class="form-item">
                <label for="tipo">Tipo</label>
                <asp:TextBox ID="txtTipo" runat="server"></asp:TextBox>
            </div>
            <hr />
            <asp:Button ID="btnSalvar" runat="server" Text="Salvar" CssClass="botao-principal salvar" Height="57px" Width="138px" OnClick="btnSalvar_Click"/>
       </div>
    </main>
</asp:Content>
