using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(PolissyaBreadWithIdentity.Startup))]
namespace PolissyaBreadWithIdentity
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
