using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace vue3classapi.Controllers
{
    /// <summary>
    /// 测试接口Books
    /// </summary>
    [Route("api/[controller]/[action]")]
    public class Hello : Controller
    {
        public Hello(IHttpContextAccessor accessor, IWebHostEnvironment hostingEnvironment
           , IConfiguration config)
        {
        }

        [HttpGet, AllowAnonymous]
        public string World()
        {
            return "Hello world from c# webapi!";
        }

    }
}
