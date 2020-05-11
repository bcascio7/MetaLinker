using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MetaLinker_Dashboard.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MetaTagController : ControllerBase
    {
        [HttpPost]
        public IActionResult ReadMetaTags()
        {
            return Ok();
        }
    }
}