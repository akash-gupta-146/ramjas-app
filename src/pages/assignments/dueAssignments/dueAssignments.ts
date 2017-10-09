import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewAssignmentPage } from '../viewAssignment/viewAssignments';

@Component({
  selector: 'dueAssignments',
  templateUrl: 'dueAssignments.html'
})
export class DueAssignmentsPage {
    dueAssignments: ({ image: string; subject: string; description: string; leftTime: string; assessed: any; agreed: any; disagree: any; } | { image: string; subject: string; description: string; leftTime: any; assessed: string; agreed: any; disagree: any; })[];

  constructor(public navCtrl: NavController) {
      this.dueAssignments = [
        {image: 'http://www.freeimages.co.uk/galleries/workplace/education/thumbs/maths_school.jpg', subject: 'MATHS II' , description: 'Aenean lacinia elementum tempor. Etiam accumsan vel ligula id fermentum. Maecenas tincidunt neque mauris, ac ultrices justo porttitor sed. Sed sed semper arcu, vitae varius libero. Vestibulum tempus dolor eu sollicitudin rutrum.', leftTime: '3 days left', assessed:null, agreed:null, disagree:null },
        {image: 'https://pbs.twimg.com/profile_images/901023388248027136/SnOngaER_400x400.jpg', subject: 'RV' , description: 'Nullam in ante ac dui rutrum aliquam vel in elit. Donec feugiat convallis est, vel volutpat lacus tristique a. Aenean interdum turpis enim, a condimentum ipsum varius non.', leftTime: '2 days left', assessed:null, agreed:null, disagree:null },
        {image: 'http://www.clker.com/cliparts/S/6/M/N/9/4/letter-g-md.png', subject: 'GE' , description: 'Pellentesque eget orci cursus mi vestibulum faucibus. Ut purus quam, fermentum sit amet tristique congue, tincidunt eu tortor. In sit amet risus diam', leftTime: null, assessed:null, agreed:'1', disagree:null },
        {image: 'data:image/jpeg;base64,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', subject: 'AECC' , description: 'Pellentesque eget orci cursus mi vestibulum faucibus. Ut purus quam, fermentum sit amet tristique congue, tincidunt eu tortor. In sit amet risus diam', leftTime: null, assessed:null, agreed:null, disagree:'1' },
        {image: 'http://www.freeimages.co.uk/galleries/workplace/education/thumbs/maths_school.jpg', subject: 'MATHS II' , description: 'Aenean lacinia elementum tempor. Etiam accumsan vel ligula id fermentum. Maecenas tincidunt neque mauris, ac ultrices justo porttitor sed. Sed sed semper arcu, vitae varius libero. Vestibulum tempus dolor eu sollicitudin rutrum.', leftTime: null, assessed:"1", agreed:null, disagree:null },
        {image: 'https://pbs.twimg.com/profile_images/901023388248027136/SnOngaER_400x400.jpg', subject: 'RV' , description: 'Nullam in ante ac dui rutrum aliquam vel in elit. Donec feugiat convallis est, vel volutpat lacus tristique a. Aenean interdum turpis enim, a condimentum ipsum varius non.', leftTime: '2 days left', assessed:null, agreed:null, disagree:null },
        {image: 'http://www.clker.com/cliparts/S/6/M/N/9/4/letter-g-md.png', subject: 'GE' , description: 'Pellentesque eget orci cursus mi vestibulum faucibus. Ut purus quam, fermentum sit amet tristique congue, tincidunt eu tortor. In sit amet risus diam', leftTime: null, assessed:null, agreed:'1', disagree:null },
        {image: 'data:image/jpeg;base64,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', subject: 'AECC' , description: 'Pellentesque eget orci cursus mi vestibulum faucibus. Ut purus quam, fermentum sit amet tristique congue, tincidunt eu tortor. In sit amet risus diam', leftTime: '12 hrs left', assessed:null, agreed:null, disagree:null },
        {image: 'http://www.freeimages.co.uk/galleries/workplace/education/thumbs/maths_school.jpg', subject: 'MATHS II' , description: 'Aenean lacinia elementum tempor. Etiam accumsan vel ligula id fermentum. Maecenas tincidunt neque mauris, ac ultrices justo porttitor sed. Sed sed semper arcu, vitae varius libero. Vestibulum tempus dolor eu sollicitudin rutrum.', leftTime: '3 days left', assessed:null, agreed:null, disagree:null },
        {image: 'https://pbs.twimg.com/profile_images/901023388248027136/SnOngaER_400x400.jpg', subject: 'RV' , description: 'Nullam in ante ac dui rutrum aliquam vel in elit. Donec feugiat convallis est, vel volutpat lacus tristique a. Aenean interdum turpis enim, a condimentum ipsum varius non.', leftTime: null, assessed:'1', agreed:null, disagree:null },
        {image: 'http://www.clker.com/cliparts/S/6/M/N/9/4/letter-g-md.png', subject: 'GE' , description: 'Pellentesque eget orci cursus mi vestibulum faucibus. Ut purus quam, fermentum sit amet tristique congue, tincidunt eu tortor. In sit amet risus diam', leftTime: null, assessed:null, agreed:null, disagree:'1' },
        {image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAHBhUIEBETFRUWFxkbFxcXFRYYFhwfGB0WFhoZGB0YHSggGBolHRUWJDMhJSkrLi86GiAzODMtNygtLisBCgoKDg0OGxAQGi0lICYvMC4vLS0tLS0tLTAtLS0wLS81LS0tLS0tLS03Ly4rLS0tLS0tLS0vLS0tLS0tLSstLf/AABEIAPMAzwMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABwgBBQYEAgP/xAA/EAACAQICBgcGBAQFBQAAAAAAAQIDEQQFBgcSISKBFTFRYXGCkRMUQXKSoiMyVKEXQpPRCFJio9JDg7LD0//EABsBAQACAwEBAAAAAAAAAAAAAAAFBgEDBAIH/8QAMhEBAAECAgkCBQUBAQEBAAAAAAECAwQRBRITITFBUYGhkeEGYXHB0RQWQrHwU1IyIv/aAAwDAQACEQMRAD8AnEAAAAAAAAAAAcfrRzT3DRp4aLtKtJQ79lcU34WSj5iY0Jh9pidaeFO/vy/PZw6Qu6lmY5zuQwXRXAAAAATtoDmXSei1Ko3eUF7OW+7vDcr97jsvmUTStjY4qqI4Tvjv75ws+DubSzTPb0dCRzqAAAAAAAAAAAAAAAAAAAAAQvrTzT37SX3VPhoRUe7alaU3/wCK8pc9B4fZ4bXnjVv7cI+890BpK7rXdXo465Mo8uAuAuAuBI2p3MtjF1srb3SSqR8Y2jLm04fSVz4gsZ00XY5bp/uPv6pfRdz/AOqO6UyrJgAAAAAAAAAAAAAAAAAAADy5njY5bl1TGz/LThKT77K9l3vqNtm1N25Tbp4zOTzXVFNM1TyVyxOIlisTLETd5Tk5Sfa5Ntv1Z9FooiimKaeEbvRVa6pqqmqeb87np5LgLgLgLgbXRbM+iNIaONbtGM0pfLLhl6Rk3yOXHWNvh67fOY3fWN8N+FubO7FSwx89WcAAAAAAAAAAAAAAAAAAADgdb+ae7ZJDLk99aV38tO0n4cTh6MntAYfXvTdn+MeZ9s0fpG5q29XqiC5bkEXAXAXAXAXAAWA0HzPpbRejiW7yUdifbtQ4W342T5lB0lY2OJrpjhnnH0nf7LNhrm0tRU3pwt4AAAAAAAAAAAAAAAAAAII1kZr0ppXUs7xpfhR8l9r73L0RedEYfY4WnPjVv9eHjJX8dc17sx03OYuSbjLgLgLgLgLgLgSbqZzO06+VN9dqsV6Qn/6/3K18Q2N1F6PpP9x90voy5xo7pRKwlQAAAAAAAAAAAAAAAAA1ukmZrJsirZg7XhBuN/jJ7oLnJxR0YSxN+9Tb6z45+Gu7XqUTV0VxlNyltNtt9bfW+9n0OIy3QrM75zLmWC4C4Zfcqcoq7jJeKZ5iqJ5szRMcYfFz08lwFwN1oXmnROk9DFN2jt7M9+7ZnwNvuV78ji0hY22Gro55Zx9Y3+zpwtzUuxKwxQFiAAAAAAAAAAAAAAAAACM9c+bezw1HKIvfJ+0nv+Ebxgn3NuT8hY/h/D51VXp5bo+/++aN0jcypiiOaKblpRBcBcDotX+WdLaWUaTV4wftJ+FPer9zlsrmR+lL+xwtU853R39s3Vg7evdj5b0551gFmmUVcA/+pCUb9ja3Pk7PkUnD3ps3abkcpiU5XTr0zT1VrnF05uElZp2afWmtzR9FiYmM4VqYynJi5lguBh71YCxWh2adMaM0Ma3eTglP5ocEvVxb5nz/AB9jYYiujlnu+k74WSxXr24qbk420AAAAAAAAAAAAAAAAV404zbpnSitik7xUtiHZsw4U13Npy8xftHYfYYamjnxn6z+OCAxVzXuzLRXO5zFwFwJZ1LZXsYOtmslvnJU4eEeKTXc20vIVb4gv5102o5b578P980vo+3lTNfVJZXEigDWPlvRel9aCVo1Gqsf+5vl96n6F70Tf2uFpnnG709skDjLepdn573NXJFylwFwJV1K5ptUa+Ut9TVWC7naE+Sah9RV/iGxvovR9J/uPv6JbR1z/wDM0JPK2kgAAAAAAAAAAAAAADQ6cZt0LovWxadp7OzDt2p8Ka8L7XI7dHYfb4mmieHGfpH54NN+5qW5qV2W5WL+rzNwFwFwzELI6LZX0No9Ry+2+EFtfNLin9zZ89xt/b36rnWd305eFitUalEUtqcrYjHXXlu1haGaJflk6ct3wktqN+5OMvqLH8PXsqq7U898duP++SO0hRnTFSJ7lpRJcBcDoNAc06J0soV27RlL2c/Cpw7+5ScZeU4NJ2Ntha6ecb47f7J04SvUux6LDFCTwAAAAAAAAAAAAAABEuuvNtvFUcni90V7Wfi7whzS2/qRafh/D5U1Xp57o/uft6IzSFzhR3RjcsaMLgLgdHq9yvpbS2jRavGD9pPwp8Sv3OWwuZH6Uv7HC1TzndHf2zl04S3r3Y+W9YUoadANJprlnS+i1fBpXk4OUF/qhxxXNxS5nZo+/scTRXyz3/Sd0tV6jXtzSrkndH0BXi4C4C4FktFc06Z0doZhe7nBbXzR4Z/cpHz3G2Nhfrt9J3fTl4WK1Xr0RU2xytgAAAAAAAAAAAAGJSUY7T3JDiK06S5q86z+tmPwnNuPyrhhz2VE+h4SxsLFNvpHnn5QF+vXuTU1lzpaS4C4Et6ksr2MJWzaS3zapw3fCPFJrubcV5CrfEF/OqmzHLfPfh/vmlcBbypmpJ5XEgAAK26X5b0PpNXwKVoxm3FfDZnxwS8IyS5H0HA3tth6K+eW/wCsbpQOIt6lyYae51tBcBcCXdSeae1wFbKpPfCSqR8J7pJdylG/nKr8QWMq6bsc909v94S2Arzpmnok0rrvAAAAAAAAAAAAA5PWdm/ROiFWztOr+FHz32vC0FPf4EnojD7bFU58Kd89uHnJz4m5qW5V/uXlCFwFwFwRCy2ieVdC6OUMvtvhBbXzS4p/c2fPcbf29+q51nd9OXhP2qNSiKW2OVsAAEP67ss9lmNDNEt04unLsvB7UebUpfSWr4fvZ0V2p5TnHfj/AL5o3H0b4qRncsSOLgLgdPq2zXorTCjNu0aj9lLwqWUfvUHyI7StjbYWqI4xvjt7ZunCV6tyPmsKURNAAAAAAAAAAAAAQrrpzf3rPoZZF8NCF5b/AOepZ2fhBQ+plu0Dh9SzN2f5T4j3z9EZjq86opR3cnnAXAXA6TV5lfS+l9Cg1eMJe0n4U+JX7nLYXmI/Sl/Y4WqrnO6O/tnLowtGtcj5LFFDTQAAAcnrRyzpLQyq0uKlarHu2PzfY5knoi9ssVT0nd68POTRiaNa3Kvty8oQuAuBlScXtJtNdTXWu9GN08WY3Tms3o3maznIaOYq34kE3bqUuqa5SUlyPnmKs7C9Vb6T45J63Xr0xU2RzvYAAAAAAAAAAflisRHCYWWJm7RhFyk+xRTbfoj1RRNdUU08Z3MTOUZqv5tmE81zOpmE/wA1ScpNXva7uo+CVlyPotm1Fq3TbjlGSCuVa9U1PJc2vBcBcCX9R+VbGEr5vJb5yVOG74R4pNdzbivIVb4gv51U2Y5b578P980ngqMqZqSiVx3AAAB81aarUnSkrppprtT3NGYmYnOBV3N8BLKs1q5fK96U5Qu/iotpPmrPmfRrF2Ltum5HOM0Fco1a5h47m1rLgLgTNqRzX2+T1crk99Ke1H5al9y8JRk/Mip/EFjVu03Y5xl3j2y9Ergq86NXokor7sAAAAAAAAAADhdcOcdHaKPCRdp4iSh37K4pvwslHzkxoTD7TE688Kd/fl+ezmxVerb+qBy6IgAALhmIWb0RynoTRuhl1rOEFt/PLin90pHz3G39vfqudZ3fTl4TlunVpiG3OV7AAAABBmufLPctKY45LdXpp+anaEvt9l6lx0Ff18PNE/xnxO+PujMbRlVrdXAE24gAB12q3Nei9M6SbtGtelLz2cOe3GC5si9MWNrhasuNO/04+M3VhKtW5l1WEKOlgAAAAAAAAAAgTXDnHSOlrwkXwYeKguzalac2vWMfIXTQmH2eG1541Tn24R957ozGV515dHDXJhyFwFwOj1e5as00voUpW2IS9pO7SVqfElv605bK5nBpO9NrDVzHGd0d/bNvw1GtchYz3mm/54/UiialXRL5s+3h/mj6oas9Bn2sX/MvVGNWRn2ke1eoykZ2l2oxkM3A4HXPlfvuifviXFQqRl1XezLgkvC8ot/KTWgr+pidSeFUZd43x+O7mxVGtbz6IJuXJFFwFwPqnUlRqKrB2lFpxa601vT5MxMRMZTwZpnKc1pMjzGOb5NRzGO5VacZW7G0m4+Kd1yPnWIszZu1W55Tkm6ataIl7jS9AAAAAAAAHjzjMIZVlVXMJ/lpQlN9+ym7LvfVzNtm1N25Tbp4zOTFU5Rmq1icRLF4mWJm7znKUpPtlJuUn6tn0WimKKYpp4Rujshap1pmX53PTyXAXAw94GNldi9BnLOc9TYXYvQZyZz1Nhdi9DOcmc9WPZx7F6IZya09T2cexeiGtJrT1PZR/wAq9ENaWdarqKnGLukvRDOWJqmeb7uYYLgLgLgTdqQzb3rR6plje+hO6X+ireS+9VP2Kjp+xq34uR/KPMe2STwledGXRI5AuoAAAAAAAAjbXhnHuuQU8qi+KvO8vkpWly43T9GT2gLGtem7P8Y8z7ZubFVZUZdUI3LcjC4C4C4C4C4C4C4C4C4C4C4C4C4C4C4Haaos26N0zhRb4a8ZU3v3XfFB+O1HZXzkTpqxtcLMxxp3/n89nVhasq8uqwZSUkAAAAAAAAVz1pZz0xplVad4UfwY+S+2/rc9/YkXnROH2OFpz41b578PGSMxNetXl0ckSTnAAAAAAAAAAAAAAAAAD9MPXlhcRHEwdpwkpRfY4tSi/VIxVTFVM01cJ3er1TOrOa1WU4+OaZXSzCH5asIzXmSdn3q585vWptXKqJ4xOXomInOM3rNbIAAAAAGp0rzdZDo5XzN2vTg3FPqcnwwXOTiuZ04Sxt79NvrPjn4ea6tWJlVpycntNtt9be9t/FvtZ9C+iInfOYZAAAAAAAAAAAAAAAAAAATvqRzf33RaWXt8WHqNLfv2Kl5xf1e0XlKdp6xqYiLkcKo8xun7T3SWHqzoy6JEIRvAAAAAAibXznPs8NQySL3zbq1Ff4RvGCa7HJyfkLH8P4fOqq9PLdH3/wB83LiqsoyQ3ctDhLgLgG7K5kyS9kep+jjsmo4utiK8Kk6cZShFQtFyW1s7433XsVm/p6ui7VTRTExE5RO/8u6nDU5b3t/grhf1eI9Kf/E1fuG7/wCKfP5Z/S0H8FMN+rr/AE0/7D9w3f8AxHk/S0sfwUw36yt9MP7D9w3f/EeT9LSx/BTD/rK30QM/uG5/4j1lj9LS+XqUofrKv9OH9x+4bn/OPWT9LT1YepOj+tqf04/3H7hr/wCcesn6Wnqw9SdL9bP+lH/kZ/cVf/OPU/S09Xy9SdP9dP8Aor/mZ/cVX/Pz7MfpI6vl6ko/r5f0F/8AQz+4p/5+fY/SR1RVnGAllObVcun+alUlBu1r7LaUrfBNWfMsVi7F23TcjnGbkrp1ZyeO5seS4C4Hd6mM36P0xWEb4cRCUO7ajxwb+mUfORGm7G0w2tzpnPtwn7T2dOGqyqyWCKW7wAAAAAKw6f5107pdXxid4KWxT7NmnwprubUpeYv2jsPsMNTRz4z9Z/HDsjb1WtW5652tRcBcDb6I5V05pNh8ttdTqLa+SN5z+yMjmxl7YWK7nSN314R5bLVOtXELULcrHz1JgAAAAAAAAABAmvDKvcdLI49LhxFNN/PTtCX2+y/cuOgr+vh5on+M+J3/AN5uHE05Tmju5NOYuAuB+2CxcsBjYYyn+enOM4+MGpL90ea6IrpmirhMZer1TOUxK2OX4yGYYCnjabvCpCM4vuklJfsz5zcom3XNFXGJy9EpE5xm9B4ZAAADnNYeddA6IV8ZF2m47FPt26nBFrwu5eVndo7D7fE00Tw4z9I3+zxcq1aZlWFblYvqMLgLgLgSrqEyn22aV84kt1OCpw7Nqb2pc1GMfrK98QX8rdNqOc5z24ff0deGp4ymwqrrAAAAAAAAAACPtduVe/aH++pcWHqRn1b9mX4cl4cUZP5SZ0He1MTqTwqjLvxj8d2m/TnQr/cuSPLgLgLgWC1KZv0hoesG3xYebh37L44Pw4nHyFN05Y2eJ1o4VRn34T+e6QsVZ0O/IZuAAACFtfmde0xtDJIvdBOrPxleEOaSn9SLR8P4fKmq9PPdH9z9nLiKuSJbljchcBcBcMrK6qso6H0IoQatOqvbT8am+N+9Q2FyKNpa/tsVVPKN0dvfNIWqdWmIdcRrYAAAAAAAAAAHlzXAwzPLKuAn+WrCUJeEk4vnvNlq5NuuK44xOfoxMZxkqXiqE8HiZ4WorThKUZLvi3F/umfRaKorpiqnhO/1RtUZTk/K56eS4C4Eiaj849x0teXt8OIpteenecft9ouaIXTtjXw8VxxpnxO6fs6cPVlOSfynOwAAYlJQi5N2S62OIqhpVnDz7SOvmnwqVG4/KrRgn37EYn0PCWNhYpt9I88/KPuVa1WbVXOhrLgLgbPRrK3nmkFDK1f8WpFSt1qPXN8oqT5GjFXtjZqudI88vL3bpzqiFsYRUIqKVktyR87mc0iyAAAAAAAAAAAAFcdcWU9F6cVKiVo14xqx3brvhn4vag5eZF20Nf2uFiOdO78fjs4r9OVWbiLkq0FwFwPVlWYSyvM6WYQ/NSnGaV7X2WnbwdrczXdtRdt1W54TGT3ROU5ra4TEwxmEhiqbvCcYyi11NSSafo0fOq6JoqmmrjG5Iv2PIAcZrbzroXQmrsu0634MPPfbfdaCnv7bEnojD7bFU58I3z24ecmu5VlSrXcvDhLgLgLgSjqEyj3rP62bSW6jDZju/nq/FPtUYyXnRAafv6tqm1HOc+0e/wDTosU7807FTdQAAAAAAAAAAAAEW6/Mp94yGjmsVvo1NmXy1bK788YLzMn9AX9W9Vbn+UeY9s2m/TnTmgq5bHGXAXAXAsZqYzfpPQmFCTvLDylSd+xcUOSjJR8pStNWNnipmOFW/wDPne7rVWdLuyJbACBdfOd++aRU8pi+HDwvL56lnv8ACCh9TLdoHD6lmbs/ynxHv/Tmv1b8kY3J1zlwFwFwLJansn6J0HpTatKu3Wl4Tsof7cYerKRpi/tcVV0p3enHzm7bVOVLtiLbAAAAAAAAAAAAANTpXlKz3RuvljSvUpyUb9Skt8HykovkdGFvbG9Tc6T45sVRnGSprunZqz+KPoaPLgLgLgSZqGzj3PSaplknuxFO6+eleS+x1PREFp6xr2IuR/GfE++TfYnfknwqLqfjjMTDBYSeKqO0IRlKT7FFOTfomeqKZrqimOM7hUfOcynm+bVcyqfmqzlNq97bTuoruSsuR9Es2otW6bccoycNU5zm8dza8lwFwPdkOWyznOqOWRverUjC6+Cb4pcld8jViL0WbVVyeUZvVMZzktzRpRoUY0Yq0YpJJdSS3JHzqZmZzl3PswAAAAAAAAAAAAAAKvazsp6G03xFBK0Zy9rDstV43buUnJeUvmi7+1wtE843T29nHdpyqctc72suAuB78gzSWTZ3RzON70qkZWXxSfFHnG65mnEWYvWqrc84yeqZynNbijVjXoqrF3jJJprqae9M+dzExOUu5wGu7O+i9Dngou08TJQW/fsriqPwslF/OS+hMPtMTrTwp39+X57Nd2cqVdblzchcBcBcCTdQuUe+6UVMzkuHD093z1bxX2qp+xB6ev6liLcfynxHvk3WY35p/Kg6QAAAAAAAAAAAAAACG/8AEJlN6WGzpLqbozfx33qQ5K1T1LJ8P3t9dqfrH9T9mi9HNC9yzucuAuAuBZbU9nHS+g1KLd50L0ZeS2x/tyh6Mo+l7GyxVXSrf68fObstznSinXfnfSemTwUXeGGioLs25cc2u/fGL+QsGhMPs8Przxq39uX57tN2c5R7cmGsuAuAuBZDUpk/RehEMRJWliJSqu/Z+SHJxipeYpWmr+0xUxHCnd+fw6bcZUu+IlsAAAAAAAAAAAAAAAOa1j5R03oXicGleShtwt17VP8AESXjs7PM7dHX9jiaK+WeU/SdzzXGcKrXL85C4C4C4Eq/4f8AOfds+rZRJ7q0NqN3/NTvuS7XGUm/kRAafsa1qm7HKcu0/wC8ttqd+SM83rSxGbVq83eUqk3J9rcm2/Vk3Zpim3TEdIeJ4vIbGAAAAuNldGOHyylQglGMacIxS6klFJJckfN7lU1VzM8c3XD1HhkAAAAAAAAAAAAAAAAU8zylHD51XoQVoxq1FFdiUmkvQ+jWKpqtUzPSP6ck8XiNrAAA2ujGLqYHPKeJpScZx2rNdavGSf7NnPi6Ka7U01Ru92ad0v/Z', subject: 'AECC' , description: 'Pellentesque eget orci cursus mi vestibulum faucibus. Ut purus quam, fermentum sit amet tristique congue, tincidunt eu tortor. In sit amet risus diam', leftTime: '12 hrs left', assessed:null, agreed:null, disagree:null },
        {image: 'https://vignette1.wikia.nocookie.net/logopedia/images/0/06/500px-Nebraska_Cornhuskers_logo_svg.png/revision/latest?cb=20130525025401', subject: 'NA' , description: 'Cras ut sollicitudin libero. Integer eget dignissim arcu. Curabitur non euismod ante. Vestibulum vitae pharetra felis, at laoreet ipsum. Suspendisse nulla nibh, iaculis ut metus at,', leftTime: '2 hrs left', assessed:null, agreed:null, disagree:null },
      ]
  }

  openAssignment(a){
    this.navCtrl.push(ViewAssignmentPage,{ 'assignment': a });
  }

}
