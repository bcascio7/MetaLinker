using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using HtmlAgilityPack;
using MetaLinker_API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Razor.Language.Extensions;

namespace MetaLinker_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MetaTagController : ControllerBase
    {

        // POST: api/MetaTag
        [HttpPost("ReadMetaTags")]
        public IActionResult ReadMetaTags([FromBody] string url)
        {
            List<MetaTag> metaTags = new List<MetaTag>();

            HtmlWeb web = new HtmlWeb();

            var htmlDoc = web.Load(url);

            var metaNodes = htmlDoc.DocumentNode.SelectNodes("//meta").Where(node => node.OuterHtml.Contains("og") || node.OuterHtml.Contains("twitter"));

            foreach (HtmlNode metaNode in metaNodes)
            {
                string metaPropertyValue = "";

                MetaTag metaTag = new MetaTag();

                if (metaNode.OuterHtml.Contains("og:"))
                {
                    metaTag.Type = "og";
                    metaPropertyValue = metaNode.Attributes["property"].Value;
                }

                if (metaNode.OuterHtml.Contains("twitter:"))
                {
                    metaTag.Type = "twitter";
                    metaPropertyValue = metaNode.Attributes["name"].Value;   
                }

                if (metaTag.Type != null)
                {
                    metaTag.Content = metaNode.Attributes["content"].Value;
                    metaTag.Property = metaPropertyValue.Substring(metaPropertyValue.IndexOf(':')+1);
                    metaTags.Add(metaTag);
                }
                
            }

            metaTags.Sort((a, b) => a.Type.CompareTo(b.Type));

            return Ok(metaTags);
        }

    }
}
