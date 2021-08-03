using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using WebFormCerveja.Repository;

namespace WebFormCerveja
{
    public partial class tabela : System.Web.UI.Page
    {
        private CervejasRepository repository;
        protected void Page_Load(object sender, EventArgs e)
        {
            this.repository = new CervejasRepository();
            this.dgvCervejas.DataSource = repository.Listar();
            this.dgvCervejas.DataBind();

        }
    }
}