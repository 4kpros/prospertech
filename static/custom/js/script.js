

ScrollReveal().reveal('.my-card__container', { delay: 10, origin:'top', distance:'80px', duration:2000, reset:true});
ScrollReveal().reveal('.my-home__img__container', { delay: 10, origin:'top', distance:'80px', duration:2000, reset:true});
ScrollReveal().reveal('.my-home__scroll', { delay: 10, origin:'top', distance:'80px', duration:2000, reset:true});
ScrollReveal().reveal('.my-section__head', { delay: 10, origin:'top', distance:'80px', duration:2000, reset:true});
ScrollReveal().reveal('.my-section__container', { delay: 10, origin:'top', distance:'80px', duration:2000, reset:true});

//Mobile apps gallery
var galleryFluidMusicApp = [
    { 
        src: "https://previews.dropbox.com/p/thumb/ABPhwseVSCNdOsVSG1-4Jus_BRjSRJUYt2lv1Of6SPX-yWvGDiTEzmbnoouYDdT2ewjHU0bEFT9qdiQIfI1_J2YFHrk0pFNTm_qvf4fQV9dNJXDXKi3mXfM32KJitxRSh0GBu9O9uSpdUSglXEpAdc3S1DjEIG4NqReUvUKN9f9hozEo3Hx0homVYm0JMK6Bs9RDl3_gCcPV4qy-FBDL56BMm0Eq8GjldUX_TbfkXgPj--xU3Z0A54vIPXkxsmbhu1NSVNfZj9g-b-s_plO2bxM2TBb4vC1H_-k1KvKCdDKbuLVyyx2lRV2IvNn_RI67Li0tRX76O_IsDha9sr8zmD1dhCbL95tnSzeUOXR5seSoZw/p.png?fv_content=true&size_mode=5",
        title: "Music Player Mobile App (work in progress)",
        description: "By ABOUAR PROSPER",
        theme: currentTheme 
    },
    { 
        src: "https://previews.dropbox.com/p/thumb/ABP2yDwODQB78QciOym8WweeIMstPUEWa1cBld1a6ZrCE72bo7sbeeWZeUUewA0TQKTu0l6xjqKTDHVXHVeYE2reSVWvlKiOJA8k-jA846Fdqs-r_ooyzgpWdavg8phBM4xsQ2e5xFxjRuO-EFRcpph4XAyvtgOKOx-4poUVC3_L4bnMBKhZUoA61Qa3QcZ_J2dHrg4yAf-Bz_8HOJdyl6Od1mbkteZqCPBEB22fmNm9ssOX5pZHAHW71BvGRjXCZovJglxH6ZqjL2pqLC5vOLI8dPFjSUy2Ls8NiFwQR52afMUekt0vwrCBMO7I8Od7TTz4xaV6SI7XfK1SE777O8KWkF0gLUO-AK3VDULlogMnqA/p.png?size=2048x1536&size_mode=3",
        title: "Music Player Mobile App (work in progress)",
        description: "By ABOUAR PROSPER",
        theme: currentTheme 
    },
    { 
        src: "https://previews.dropbox.com/p/thumb/ABO-Qta-E4N0JC-Vx9VopPBmJ3GcCqUSAmUSE_FPM8XHuve7AkuRtdfTYErX3mamIkSzr_x2JzSz0vO9WMatecTn_crfgQKnR29rcec2mKDRytVonUgy1zqNBdjS4gq39Oin-X9z6q5AMMpEX10u3cPoCl07nZd_p3DHv68mpXdZNI-hIXtDc7729lkU8fxOrYHeRctrRhIYoZ0SYs2WI-QC12Tg2cIljJJh2Saf-iUEimEu0yiiKKrqXf9QpZccYxFUrNdxB_8NwA75pqx-ogJ1xBHEI1la0-rj71eizNmqhfptq73xVAp-FgM1ZSmhV4MO-5-IkeTGnRQr7EXY5IdxomXCo_R_pnsBH6PnrO26Sg/p.png?size=2048x1536&size_mode=3",
        title: "Music Player Mobile App (work in progress)",
        description: "By ABOUAR PROSPER",
        theme: currentTheme 
    },
    { 
        src: "https://previews.dropbox.com/p/thumb/ABN75lSxY7tsYsr2pH6KQX5lYuFNTMsE2hRnSfRKyh-vOaTm10nqEAH58xELhKSIKHambtwSeOgc1uYfRs--RrAMh-r_JwvGlEfl_2TW1eb7MFw7t0N6Foc7gxfJlkqCSrxxH5sa1Z58xSjCGpwhyfdt-hXIn_PTGcLGrv4S32LxxFQximVSwbndYH9fAZsUVf1D_hhydFWpYVQT_4dnsUV51EgkjhVmgyvEdOw0LClq2HiJcYRCkK7FhB_e8VbaHKGsnWATvfAuxkhPkVYj8gb3eJlGflc6792_Ayr3jTOoJnuSm8pYSSfVyyEqFHNoVMVf_n9ZKwP54rzA8Jx79eTDhmY-kK4KiXkUjXSa5T0j1w/p.png?size=2048x1536&size_mode=3",
        title: "Music Player Mobile App (work in progress)",
        description: "By ABOUAR PROSPER",
        theme: currentTheme 
    },
    { 
        src: "https://previews.dropbox.com/p/thumb/ABOdioUGSSqB8nWVUlZ3GzTcG6PJ9WVqOKg7utTVS8_2JYQYLFgh7p1E0XIKVQ1FwUrdAyRzA1m02yVESoLgDbcvOmwzDmcTS0KKlIoMGqluEg1FvslfAChXlPtL8nl2yFUneoPo88aG-MaVo2sgSvhU35EYTEGv7yrX0tO-SOtaV0PK2ryrP_dXq_tf1QDDlQ8cLeVvv6VQ4mpZt4PwkxXFpziOeLyI9K8oB0OVJ-XZklR_OK9boczNEph4JndT7nt2A5iwHQKb0lCZ99oLbOeHlIbN2nr4MTgpg6pM6OJ7ZI1M85K9kntyk2RnARc_HSv3a5ddb5iLhe5ihcwychxzkqkGvCd8Egw4lWwFi6oCaw/p.png?size=2048x1536&size_mode=3",
        title: "Music Player Mobile App (work in progress)",
        description: "By ABOUAR PROSPER",
        theme: currentTheme 
    }
];
var galleryCovidApp = [
    {
        src: "https://previews.dropbox.com/p/thumb/ABNVqfOS8NLO8NP_OM9HBaIgo0eAMJHqFQnbc2fLmFlCdvTgjXdJwFshUpvcW5fDRfzoduUYkwK35d9NOvcOxojozumz0C_8ofSWbDjRkAnJmfhVatQ8brOQyruNvvwoSCea6T4ZD3d5yPSLdjH_2s_U-6Eh7fys-Zoh1vETEMZV6k5HCop5E2F4KtoNDomvY1fOIykktw_mLCBuij4dXiH9bbit6kVgf6Trf7yiNZlobXqocX89XN8vEzWzx-yRenNivnqXxZWDmqo4NL_dhX1rLqWzy5wq3U-0689ZCOyMIu3QpVOkhi9CdDyGjg3RgYimFBrF5ivc-HwuB5sAHVR_Th_iKbmsbblz68cqBLZo5g/p.png?size=2048x1536&size_mode=3",
        title: "Fire Fighter Mobile App (work in progress)",
        description: "By ABOUAR PROSPER",
        theme: currentTheme,
    }
];
var galleryFireFighterApp = [
    {
        src: "https://previews.dropbox.com/p/thumb/ABNVqfOS8NLO8NP_OM9HBaIgo0eAMJHqFQnbc2fLmFlCdvTgjXdJwFshUpvcW5fDRfzoduUYkwK35d9NOvcOxojozumz0C_8ofSWbDjRkAnJmfhVatQ8brOQyruNvvwoSCea6T4ZD3d5yPSLdjH_2s_U-6Eh7fys-Zoh1vETEMZV6k5HCop5E2F4KtoNDomvY1fOIykktw_mLCBuij4dXiH9bbit6kVgf6Trf7yiNZlobXqocX89XN8vEzWzx-yRenNivnqXxZWDmqo4NL_dhX1rLqWzy5wq3U-0689ZCOyMIu3QpVOkhi9CdDyGjg3RgYimFBrF5ivc-HwuB5sAHVR_Th_iKbmsbblz68cqBLZo5g/p.png?size=2048x1536&size_mode=3",
        title: "Fire Fighter Mobile App (work in progress)",
        description: "By ABOUAR PROSPER",
        theme: currentTheme,
    },
    { 
        src: "https://previews.dropbox.com/p/thumb/ABNVp393Xt9UM9-zaFIu-LERp-JoMmlztzwGC39B3whtihjcV56xlhXnxiY90ao73_W4dvYfR8ezQNoV0kmwypS9nKH5IOGS0UN2Os0cbH132Xo4jWjpCazoqD55Ke1QQob0P9OBr8aufcU1410Sy-fiRxlswWQRHIW2qlGdNZDfpzjYLWltUK60EOb9CeXzE5J7CkuW1_W7w-5clGOxUWN1f9VZOrdNm1VtlaB8D786Bo-ULckE75dVFGbLKjNHv90sAZ04JBo27cC2aC3aWGVBYhJ__A8948U6vbC7OR9WUCKEo-QBt6SokCWOsMliBpmS9tqvuzgnEA53bD49f2wyuHt-M13UsXbagwCcX8c6dQ/p.png?size=2048x1536&size_mode=3",
        title: "Fire Fighter Mobile App (work in progress)",
        description: "By ABOUAR PROSPER",
        theme: currentTheme 
    },
    { 
        src: "https://previews.dropbox.com/p/thumb/ABMqGEpoT_vPubkspC5a15O8UOY-PMhRUHm2g5_UkFLUFZrGVBtlPSoxiEIGOp25nPKZuhSMdWR1HKIEpDuTHXx38EBeglc5yI5OTvZpBIPhjHa74FPpOMwYytIZopK8ATRH7U9usE81ovGSM0mYjtzEnYjkxsSWhLqMeoyacokM-1Ly-8ggsNXiPgfHvYnboYeO4Cnmq4SaxxDRkftk_qTYWRCXDQOOkTFV0rk8jJxFXN74MQ6jQrj1Gu4cw5umEeE99laRt21HRJ9AP3-SZ3UUIeX5fltztumuUzsFB83XlKF3haa38mi6KI4EivSEkIWNQukFFNeZTBKjc_fUvMYnsVJ6W39jEfrJnmfo9kgoVA/p.png?size=2048x1536&size_mode=3",
        title: "Fire Fighter Mobile App (work in progress)",
        description: "By ABOUAR PROSPER",
        description: "By ABOUAR PROSPER",
        theme: currentTheme 
    },
    { 
        src: "https://previews.dropbox.com/p/thumb/ABMkAGk12ZYGbgY6OlfMc0-5WqUQLgvYRc6HxvSmI-L0YCNicN2nvDzVXf6_Vg2s2eiAzR-Tzc22vubAQC5DxNe_4x_zuwP3Q3_ACS4RTwjJVfE540ehwyQY9N8s4PQK0vDePM33i3zISn9MExTSpM6N1h24_ic_n02O1Gpztrzs3HZpR7YGagHtBhAw6bSBeF4z_h68PnM6afuhjPPskVRCD8sYmLc9kgEyurfoiX2JeC4xjBT5Ea6hu_D-BrDEkV9a0aY8MRa10mIihV66Zsg_Ok-3cQTPkutyt5gWSTLbj71NqYooLTJWSUgj7En8t_0yfbdUpv_moif5ehgWpmVUhztay2dy7ZKYShMucf2XRQ/p.png?size=2048x1536&size_mode=3",
        title: "Fire Fighter Mobile App (work in progress)",
        description: "By ABOUAR PROSPER",
        theme: currentTheme 
    },
    { 
        src: "https://previews.dropbox.com/p/thumb/ABPUqB0s06DwZ1oWI-Il2Qf0HfJxuKmLKchru0AHcEE6NKRx5VqqiBalJ26TN_rlSZhtKysL-g5HvluqVgQYaxUOJ9ij3dtptRZE9z2_Y3NKNKFdTQOaEvLVyfn9AsAtUbyqux19TQXRtuZCiZeUTPArBFEpsxurEV0_iWV_tKnp54k7TwPWh7Ld_y9tvRMdXA2YU-ZrVqdAX0-G_u2fUDfeFXRrBYCbm5WYlXiVZ-9RklNwsWIW-5_rUbr2PiXY3nx7Y-kPxHjYfszCtUCUjfduSqmd8ygTu4KaPpwg60IgG5vskUF1sNhrZNprWs5eylnadLDVopiNIU31WgxYE0dcHnD51xYVOCjgSPSeiG5adA/p.png?size=2048x1536&size_mode=3",
        title: "Fire Fighter Mobile App (work in progress)",
        description: "By ABOUAR PROSPER",
        theme: currentTheme 
    },
    { 
        src: "https://previews.dropbox.com/p/thumb/ABM3EIZCeQ4E-vTUhTsWfGzV0lpEuTHbi6rf-J2rAFyNVGELqu2Hk027xnhSAPTA8QO69k3XZ4q_dJmb5cHDcuesfukRKYhjIZQ-ABc9jyjWd9XxjL0vcMTw4C5SvXHqRhgyFerz9op3qvGz8_vKmK3yP3ndpK7083e2W38g6NHP8LIWg-jCt3oPVEWcO24xyvtusl17ggSRhoJn9kZ5Bfdd8anMX_eUssOB0-eJ5OLD1zHd7fe6eq36I5soRYmiAb8zm3jZ_ncyf-JqNL8LWPvfQzhWOSEPZH7qZBFJzovYeTYHWV2dAI0mYxwXXi9_LDt-HCDf5abnahqPBa_JpN9YH23ePX5BqnAOXRnYvBGZbw/p.png?size=2048x1536&size_mode=3",
        title: "Fire Fighter Mobile App (work in progress)",
        description: "By ABOUAR PROSPER",
        theme: currentTheme 
    },
    { 
        src: "https://previews.dropbox.com/p/thumb/ABORm9sWXrR2pAWdJcOxaRI49xD_jGlsfJLEFE37jbql00entmEJyhMcL-fKBaT-PNk3qdcdrA9w9WbnKOGZedQwXswvgma9oSkPlmHl9EZqJO1ZtO1FMOikojmZVlgLbfn-4XAffNZ8hby4i9zk5LkP6vfAwC8YGZbliYJU3wZ9_obgLYv-04fUJJcOemDVZoibLZNkeB8hpfPP1vIUMwGd5L2Hwu3wtjgoD766hzEQSWCa_Q57eNI4tWrtkH8-cg3jiM96_o1gJFPi6zkFK6BM10xwrswHmYrpEQwgM2xHXI47L-uJKXuqy7a7rhF8-RRExjRtSOCKjq7138D47kqbloz97Q3K1abSKn8YPSgzlA/p.png?size=2048x1536&size_mode=3",
        title: "Fire Fighter Mobile App (work in progress)",
        description: "By ABOUAR PROSPER",
        theme: currentTheme
    },
    { 
        src: "https://previews.dropbox.com/p/thumb/ABP9yi6KeYuCNq2hVOle5xNulQulB1W4SNMBx3HgG0pNNMraImtp5QJySSQeBfdJ-ta4FA9ZQ1UnNzKTaZylWbkliew87_jMmXsWC1kIBMVt0FS9oxuVuFc4YDQ5yE4Y_B0oxVMvSG08VpGxz8DZy7GnSiIWdNOKcnV99iZ2wHPPw1I8_aT5J6xrzN2nP4pcMbpCipkLEAg6zEl-gb-UqS1FExqb1o7kH-jBZwBIE5BaFkJitNG7EF5uUF03r_fOlQr_Jl_BjsBsetjBPcHfX53AoYx_qmyhBCP9FjExO64QwDRx39NJoGX7cCLi2gWcDnUO1DjwcrIn-WOoU0HUjXop0xyhwOfuNxWAMJgx5YJDLA/p.png?size=2048x1536&size_mode=3",
        title: "Fire Fighter Mobile App (work in progress)",
        description: "By ABOUAR PROSPER",
        theme: currentTheme 
    },
    { 
        src: "https://previews.dropbox.com/p/thumb/ABPpz2TH8mUk43Upthul-oBLfw1u6ZGY_LZSAhxaQD_-Fvjlse62x_T_yXW6e7cN2VdVPPa9munxovctj5SxZHLVlaR0PJkrizTZROqB88wzcyZ8g8dbQw6DlC34ZDREYQ9MAu4dojN4QqjVPv1IWxdqyN43sl0ZPlcbZDRkWXiNjexoucTuufHmvtEzDSYfPyfktTZKBw0KZDROKFVgzzSsdAff4parmWx51pomW3SiZbjvcD9hXB209-FEp8Miq7q12uIv5ow-1XjbeRjiGp7icVc-FO95WEXuht6T-xXas3RWdpKwsNO3blexPTZMeTO-dF3g_6IBXq2JErMx_cD2GAi5pePOz2U6qGwYykrl-Q/p.png?size=2048x1536&size_mode=3",
        title: "Fire Fighter Mobile App (work in progress)",
        description: "By ABOUAR PROSPER",
        theme: currentTheme 
    },
    { 
        src: "https://previews.dropbox.com/p/thumb/ABMGL6hmyft0MnFnc7oAOTG5Dbitrc-WrawvhiQzNmHi8al3LSKeQur6UJm5f4-MZzri92U1WQuc870JX0dfpApe1FDV0GupEAjXkluzohVAgs3qZXYxJgU08swB7dhfSO-Pyiv-q3Uf7IrpVqb-WM_7_hGs_p5wMaNGrXuP2MC3ukbNu3LkcpTmSTqHbqM7t33tg26UBn2IV-JihXZT9YNELRAwz3LfegA9izFXDrkFIVDSoQ20tcRuKp5xdx-0s0eNYeJ7TejE8J_dM76bqj7DvK45uUchAUh2DO4rG0yVAroXgXSpJNq9OsVWksr9TsnQRdFZHRMrdNCXYqDkhWhmBUDjlJzYH_luMKU8YfGTBA/p.png?size=2048x1536&size_mode=3",
        title: "Fire Fighter Mobile App (work in progress)",
        description: "By ABOUAR PROSPER",
        theme: currentTheme 
    },
    { 
        src: "https://previews.dropbox.com/p/thumb/ABPK1-k0ap9z1WPyX2-3titi_RKxJVcYdFY-HpBwrC386Y0wc8MX1XsyWaUeM5qDZV7L4j0xoM9zyD2uh6VIsfJ64u3lawEHRMK9ZYJdhTurnQK8KAr9TrxsO4AFk24537JELnTtbLj7PCyFvw8qonIKWg_WccOnex4Yo2MgBMftwv9s8p51OJG07Mu_lSIicZmAUmn9hFuYfX7hU_cnNlN_zQ6sjWpQRRg9o91Ru72MnOaj44RY-FQx6cf81AM6ipfM4R7zNz_7AvEv_WEhzLZkG_XZA1K8wyoiGtiy63hKiKRdydUTGsn-NlOYFavndvmpqVhaVk69QevRo4PVou7ssRwF0c6hUCpZAYtY6DCL5A/p.png?size=2048x1536&size_mode=3",
        title: "Fire Fighter Mobile App (work in progress)",
        description: "By ABOUAR PROSPER",
        theme: currentTheme 
    },
    { 
        src: "https://previews.dropbox.com/p/thumb/ABONWOXOU-hRivPtOV6gIo-kpG6D_zo0BCpQvzO3LLvUqavvrdaWV_jmsfawdNc1ORH_RoxN1rxHD0656Fndnn3y91RQ65PWw-_evMHDuTOpzypSUJsXfqBsGxNk2V-Wc85-JrkON-hHH79DluwoPi1sQXTWZKhRv5SfAm9cKxX7Mr82_eUqd1LjtL9ZhqLHpmjSf8YL4F6fwRR-uEflC3taTzls_JnUqoONOZpQA8MeqSUD_r7qhUD_6TBSHl20TTQRFsNySErNMN59e_F9TD_bscau-CRDS6xGSqURJnZLkJRyEiC5e4dIwZRkcmZtW0_4W_CsxOlyZXpEX7S928y-hp6OzU3e_8ndrPtgJcG0Vw/p.png?size=2048x1536&size_mode=3",
        title: "Fire Fighter Mobile App (work in progress)",
        description: "By ABOUAR PROSPER",
        theme: currentTheme
    }
];
//Web apps gallery
var galleryCovidWeb = [
    {
        src: "",
        title: "Covid Stats Web App",
        description: "By ABOUAR PROSPER",
        theme: currentTheme 
    },
    {
        src: "",
        title: "Covid Stats Web App",
        description: "By ABOUAR PROSPER",
        theme: currentTheme 
    },
    {
        src: "",
        title: "Covid Stats Web App",
        description: "By ABOUAR PROSPER",
        theme: currentTheme 
    },
    {
        src: "",
        title: "Covid Stats Web App",
        description: "By ABOUAR PROSPER",
        theme: currentTheme 
    }
];
//UI gallery
var galleryHouseUI = [
    {
        src: "",
        title: "House Finder Mobile App - Prototype (Adobe XD)",
        description: "By ABOUAR PROSPER",
        theme: currentTheme 
    },
    {
        src: "",
        title: "House Finder Mobile App - Prototype (Adobe XD)",
        description: "By ABOUAR PROSPER",
        theme: currentTheme 
    },
    {
        src: "",
        title: "House Finder Mobile App - Prototype (Adobe XD)",
        description: "By ABOUAR PROSPER",
        theme: currentTheme 
    },
    {
        src: "",
        title: "House Finder Mobile App - Prototype (Adobe XD)",
        description: "By ABOUAR PROSPER",
        theme: currentTheme 
    }
];
//Games gallery
var galleryGameDevlog = [
    { 
        src: "https://previews.dropbox.com/p/thumb/ABOO7P5W6PIJ8FN-GnOMnMObsTzmdP-VQJNhxhgS1DMpjdJOo8b5k7JYysUNlmvjfo93hd4juVo9DsoB08Gt3ytWldqI0dAxbC4qE348beyooBBmvPd4VeAVCfvRBf3CDzBMTuRmCp9f_YuFjSYQqyM0GI83mWKKxpfwzham-6j1yoZpn1s-SXc4sankL79jeF0nZxpsIWxMEcqNZxJvSggARFfBqYDa0TEKDMInvyF6TDNmDjr-BB_Z4MbuIzI8pdynLya8dhETI4s9hEXgJUnzYlOwo26DdUiP4phxlGd1F1IXDkGM8g2tZHQzHRrK7dR2Xm90frIPTfDwB-bHyOEYFU6IusdAuQF5E6_ISa4ZdQ/p.png?fv_content=true&size_mode=5",
        title: "Game Devlogs (work in progress)",
        description: "By ABOUAR PROSPER",
        theme: currentTheme
    },
    { 
        src: "https://previews.dropbox.com/p/thumb/ABMvhx-awZ9G75v3aTfVUfJLYyyfvuArAqE9LerbSxFYj9wuDBAPLbDe51AQqU98W3Jps5OVacC_J_lA7-0AsFV3ZlSGbI6bVTkiinuVcD22_K-m_sOstu8Acof6p94z3nn0nHVuFun_LWAYjqUhhBq7dmEUlH_UlqeuE1Sq4P0jPNp3gFLQCSLL2ZdE2A6eABTlZhT-1LGbXVP054ADOwngXmW4yvLMdqwELN6Ttas-KfscAc3SPnCkTaWuDMB7paFBcm7iZBKYZkr3gVnbe770vYWCFw-qz8c0VAVd1JvpLEalLGSFeYKGF8baT209W-UdILCTj0abfugLdfBCLdCxZb8YSQRS-RAtMH7XVGW6Lg/p.png?size=2048x1536&size_mode=3",
        title: "Game Devlogs (work in progress)",
        description: "By ABOUAR PROSPER",
        theme: currentTheme
    },
    { 
        src: "https://previews.dropbox.com/p/thumb/ABMJVmrwVMjwvuPPmGlky6baZQua3FENHoJs5aOXlETvT_KRfL_Gd5FBotVdeutcUgiKa1X3UuNwx0ehaUu02K9E-ZadXGTKUoUf_q4zxpLNV4MSJpgAFX0auc0O46mm-EQ_avxU5GKIkMgQGRZzalPKioTgqYjUuVOA43X-gvPYU7h-rVvU_MjitmQ0U4GM1q-PSggM5d7z3AkLAMDRRsVp52vJCkfBv85eLc0NwKKDtuhb5smnKXDWpi8AGbqrnzvGJtMSh7JOyKF1TDW8G-IOo7CQ7qcQFUBkAKpyuSGf0HoEvOlGw0M1Zkfqpg7YdgZIgDQ-cEknCEyFWqxtzdYktzPDzXqcZKdJvP2vkPBirA/p.png?size=2048x1536&size_mode=3",
        title: "Game Devlogs (work in progress)",
        description: "By ABOUAR PROSPER",
        theme: currentTheme
    },
    { 
        src: "https://previews.dropbox.com/p/thumb/ABNyJ1zpUJLC8RRR2kB3wkcipw3MGUp2O0QBeRXg3exF61mKz0V0Uhw1dbUvyaIQA6xhd6v3OOPMWq2XlxYTFOy3NOGQx_Z2qBNbuMyo0qWj4kLbZibFks4_awvVfBKATA1ZXJFY-CY8la4IfEj2D_elI75LNli2DB-1w_MrM9MymMbGMWgUqVVh62fS9c9XFP7Q62h67VXfnXzMmPvVA5gENZksQ2UMfcoI3pHGXhfxoxn0sleAzh8Czt_LApIl-QkEf_-rvE1amOYpUMHh1DZRZctLt3mP24FvNqhpJJThywRmFF6-JBq4uR11V2GTOH7W3HO_RweoIyN_ZXmQkPYEmjA1X3ddc3V4Tu9MSMJkQw/p.png?size=2048x1536&size_mode=3",
        title: "Game Devlogs (work in progress)",
        description: "By ABOUAR PROSPER",
        theme: currentTheme
    },
    { 
        src: "https://previews.dropbox.com/p/thumb/ABOjes4b1521pGj8FkmOZU3WN3j6qXOArTHdDgovNRVb8heD4yXafQauQTCNVPFS_ip_58gG4XMzfJjjhRTvDiNi1KCtw2ak1VRi9IkzhdItWivex98e5eZOcXkv-ba4sa1I_oO3CjLiLb-HvRLPrp12PjayA5AYkJEZCoPMC8pPhSgKWcGvyHpDv-zrBp4qVnTRTPVx_k6Q-qEXEUQVS90U9sz4jJ78-9CtNqx0RznSTIsK2pN5gRYCgeXL2qzaQvhWwyEZOEl01Ea4RAWks0U1KPRMFuE09Vm_vIOOILhu3hh3VWwXDxWY34XQOH1sHw-UkFfhxph7T3WS8WvhzMVlzUpKS5Qh6PR3IDJFsL5EYA/p.png?size=2048x1536&size_mode=3",
        title: "Game Devlogs (work in progress)",
        description: "By ABOUAR PROSPER",
        theme: currentTheme
    },
    { 
        src: "https://previews.dropbox.com/p/thumb/ABO25txZZTeyAn4O7HfZkJTfS_KBaBGhdTn1f6N3A00tVDWvk0Gn0tzoaiWqFIstdoVPctOOUEAv0xMt8EV-NpXu-wZssuEpa4-Y4j3gvq-hIndLGyOnWUNHCG04WrU2KXkvk2Et-o4Y_S_ycqrTzy3_Pnsupvm56VippNbllJLixMccvqU5nmB20NgS61OwLsUwFgNvRz_X8RBcgtVZnL3f5owEz6JTdalr4W7RTdqiXsws7a8L0jCcbo37_zTXUYaL9oDEFtdIR2X7iVRdEQQsyhtnqVJXjOXoHgqY-VlafF-F-87ORXIvshh2wKwh-J8lI4DEzoK2vnC8fIwHrhKViHXt-tfepGBFrqdfWJ505w/p.png?size=2048x1536&size_mode=3",
        title: "Game Devlogs (work in progress)",
        description: "By ABOUAR PROSPER",
        theme: currentTheme
    },
    { 
        src: "https://previews.dropbox.com/p/thumb/ABPbfiAu6TCvPOzKsX_wX-aTJ2WxBf9RZGMmptTQQ6zyv0CAbgTTVr4vsP1VXJIBL4L2fut9wXNovZ0Qtcjwla-8ov72IPZ9E4JaFHOmQWP8Kn6ut53ROKtUe7vn8vgN2JM_J8sTAjhFTmMIEgIVxKFndp7MD6OV77JdulMSWCssRCemuVyisS9N108jaeJ12MrbWUxtneF95p2tSexoaR7Elp0oFumdW6_CK5CaT5hq65zTDnZR1UjPia82DhcUzK0ig3XpED32sy9ABBGf0vvTGLTxK1a97kxqehaclAup-zumabXlWv4FtGlJcZeSMtZGcorvBaRrP1y2asLbXgJPyivyIe79O1Gy5wJe1HSuJQ/p.png?size=2048x1536&size_mode=3",
        title: "Game Devlogs (work in progress)",
        description: "By ABOUAR PROSPER",
        theme: currentTheme
    },
    { 
        src: "https://previews.dropbox.com/p/thumb/ABNQfWCiU7JRZ2pJRK3PSUOyzZ_uqxL5v1nsSadOtSl5jbS-aNW9jUH-MN2GD48mcz7HU7TA_2bTr1aMSe0iUBCYtcrNHGrrPLDQK2e_eIgHLltY5TAVZtKALEgk_vdRpFw_FhOK2EvQYRu8bK2i9j3NUV9CdsZsuRw_pGLnicYLM_47VlqQ9u0uDgSxQ_UjzEBKap93x3XdJnhC0eW-x11plzt2_AOzEInk8lBJYaqWtm_Ut-ES-fpj3gK0-R9nuQF3WzwmVgEQkTVcIGy1EN82XL7aIS-TANNAyFAEjh2zelnQJKp9gLd7EwOfk-VqfNS0OXfnwzDImGflPGOblWqnO_Flwba71Y71QrFcIL8EOw/p.png?size=2048x1536&size_mode=3",
        title: "Game Devlogs (work in progress)",
        description: "By ABOUAR PROSPER",
        theme: currentTheme
    },
    { 
        src: "https://previews.dropbox.com/p/thumb/ABOM1S_ChVNBKf-LjSnnr8glKpcKR680vDgT3MOsGSegM2mYMxuSLK30X5thukM2rmq6gAjV3hYmN9lCewTYAt5wUc_BNfbJaoQlnCeEMKOpkCOG7PuWpdLNMHlxg2uWTN_atgyouBDa8oOHBjSkZlYgB6_7s2SeWQx9QCVho512N_4RNMc7nCkJRmbKbxTMxQYxuRPx8HKQOqBiAYvZuTHUfC7UQNWyr1Chit8yj8BTMbpxy28Ki5OaY2VLpcshtPdxi-PrSdp1Lb6-tsmThGs41Y0AE16tUqgKXSYo-ebcOnHplx3KIu1MqeHtDdyTGOgEYHiP-mOyvl0liWQlbbdvL5i0LHHcTxgVVucxDmTBxg/p.png?size=2048x1536&size_mode=3",
        title: "Game Devlogs (work in progress)",
        description: "By ABOUAR PROSPER",
        theme: currentTheme
    }
];

//For works filter
const filterItems = document.getElementsByClassName("my__portfolio__item");
const filterCards = document.getElementsByClassName("my__work__card__container");
const workCardButtonMores = document.getElementsByClassName("my__work__item__look_text");

var getItemWorkDetailsClicked = function(){
    var attribute = this.getAttribute("data-name");

    //Check for mobile
    if(attribute == "look__fluid__music__app"){
        Spotlight.show(galleryFluidMusicApp);
    }else if(attribute == "look__covid__app"){
        Spotlight.show(galleryCovidApp);
    }else if(attribute == "look__fire__fighter__app"){
        Spotlight.show(galleryFireFighterApp);
    }
    //Check for web
    if(attribute == "look__covid__web"){
        Spotlight.show(galleryCovidWeb);
    }
    //Check for ui
    if(attribute == "look__house__ui"){
        Spotlight.show(galleryHouseUI);
    }
    //Check for game
    if(attribute == "look__game__devlog"){
        Spotlight.show(galleryGameDevlog);
    }
}

for (var i = 0; i < workCardButtonMores.length; i++) {
    workCardButtonMores[i].addEventListener('click', getItemWorkDetailsClicked, false);
}


var getItemClicked = function() {
    var attribute = this.getAttribute("data-name");
    //Set the current active button is this
    for (var i = 0; i < filterItems.length; i++) {
        if(filterItems[i].getAttribute("data-name") == attribute){
            filterItems[i].classList.add("my__portfolio__item__active");
        }else{
            filterItems[i].classList.remove("my__portfolio__item__active");
        }
    }
    //Show the correct views
    for (var i = 0; i < filterCards.length; i++) {
        if(filterCards[i].getAttribute("data-name") == attribute){
            filterCards[i].classList.remove("my__work__item__hide");
            filterCards[i].classList.add("my__work__item__show");
        }else{
            filterCards[i].classList.remove("my__work__item__show");
            filterCards[i].classList.add("my__work__item__hide");
        }
    }
};
for (var i = 0; i < filterCards.length; i++) {
    if(filterCards[i].getAttribute("data-name") == 'mobile__worked'){
        filterCards[i].classList.remove("my__work__item__hide");
        filterCards[i].classList.add("my__work__item__show");
    }else{
        filterCards[i].classList.remove("my__work__item__show");
        filterCards[i].classList.add("my__work__item__hide");
    }
}
for (var i = 0; i < filterItems.length; i++) {
    filterItems[i].addEventListener('click', getItemClicked, false);
}

var buttonTheme = document.getElementById("my__nav__theme__toggle");
var currentTheme = "black"
//Change the current theme
var changeCurrentTheme = function(){
    document.body.classList.toggle("dark__theme");
    if(document.body.classList.contains("dark__theme")){
        currentTheme = "white";
        buttonTheme.classList.remove("bxs-moon");
        buttonTheme.classList.add("bxs-sun");
    }else{
        currentTheme = "black";
        buttonTheme.classList.remove("bxs-sun");
        buttonTheme.classList.add("bxs-moon");
    }
}

//Check button for theme change
buttonTheme.addEventListener('click', changeCurrentTheme, false);
