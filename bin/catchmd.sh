#!/bin/sh

cdir=`pwd`

prodName=(
    "tinper-sparrow"
    "tinper-neoui-grid"
    "neoui-kero"
    "kero"
    "kero-fetch"
    "tinper-neoui"
    "tinper-neoui-tree"
)


for name in ${prodName[@]}
do
    case ${name} in

        tinper-sparrow)
            rm -r ./snippets/sparrow/
            cp -r ./node_modules/tinper-sparrow/snippets/ ./snippets/sparrow/
            echo "====抓取 tinper-sparrow 文档成功===="
         ;;
         tinper-neoui-grid)
            rm -r ./snippets/grid/
            cp -r ./node_modules/tinper-neoui-grid/snippets/ ./snippets/grid/
            echo "====抓取 tinper-neoui-grid 文档成功===="
            ;;
         neoui-kero)
             cp -r ./node_modules/neoui-kero/snippets/clockpicker/ ./snippets/neoui-kero/clockpicker
             cp -r ./node_modules/neoui-kero/snippets/combobox_ex/ ./snippets/neoui-kero/combobox_ex
             cp -r ./node_modules/neoui-kero/snippets/currency_ex/ ./snippets/neoui-kero/currency_ex
             cp -r ./node_modules/neoui-kero/snippets/ex_checkbox/ ./snippets/neoui-kero/ex_checkbox
             cp -r ./node_modules/neoui-kero/snippets/ex_checkboxdata/ ./snippets/neoui-kero/ex_checkboxdata
             cp -r ./node_modules/neoui-kero/snippets/ex_datetime/ ./snippets/neoui-kero/ex_datetime
             cp -r ./node_modules/neoui-kero/snippets/ex_month/ ./snippets/neoui-kero/ex_month
             cp -r ./node_modules/neoui-kero/snippets/ex_monthdate/ ./snippets/neoui-kero/ex_monthdate
             cp -r ./node_modules/neoui-kero/snippets/ex_pagination/ ./snippets/neoui-kero/ex_pagination
             cp -r ./node_modules/neoui-kero/snippets/ex_percent/ ./snippets/neoui-kero/ex_percent
             cp -r ./node_modules/neoui-kero/snippets/ex_progress/ ./snippets/neoui-kero/ex_progress
             cp -r ./node_modules/neoui-kero/snippets/ex_radio/ ./snippets/neoui-kero/ex_radio
             cp -r ./node_modules/neoui-kero/snippets/ex_switch/ ./snippets/neoui-kero/ex_switch
             cp -r ./node_modules/neoui-kero/snippets/ex_time/ ./snippets/neoui-kero/ex_time
             cp -r ./node_modules/neoui-kero/snippets/ex_validate/ ./snippets/neoui-kero/ex_validate
             cp -r ./node_modules/neoui-kero/snippets/ex_year/ ./snippets/neoui-kero/ex_year
             cp -r ./node_modules/neoui-kero/snippets/ex_yearmonth/ ./snippets/neoui-kero/ex_yearmonth
             cp -r ./node_modules/neoui-kero/snippets/grid/ ./snippets/neoui-kero/grid
             cp -r ./node_modules/neoui-kero/snippets/gridValidate/ ./snippets/neoui-kero/gridValidate
             cp -r ./node_modules/neoui-kero/snippets/mainChild/ ./snippets/neoui-kero/mainChild
             cp -r ./node_modules/neoui-kero/snippets/module/ ./snippets/neoui-kero/module
             cp -r ./node_modules/neoui-kero/snippets/moduleapi/ ./snippets/neoui-kero/moduleapi
             cp -r ./node_modules/neoui-kero/snippets/textarea/ ./snippets/neoui-kero/textarea
             cp -r ./node_modules/neoui-kero/snippets/textfield/ ./snippets/neoui-kero/textfield
             cp -r ./node_modules/neoui-kero/snippets/tree/ ./snippets/neoui-kero/tree
             echo "====抓取 neoui-kero 文档成功===="
          ;;
        kero)
            cp -r ./node_modules/kero/snippets/arch/ ./snippets/kero/arch
            cp -r ./node_modules/kero/snippets/core/ ./snippets/kero/core
            cp -r ./node_modules/kero/snippets/datatable/ ./snippets/kero/datatable
            cp -r ./node_modules/kero/snippets/dataTableUse/ ./snippets/kero/dataTableUse
            cp -r ./node_modules/kero/snippets/dataTableUseBackend/ ./snippets/kero/dataTableUseBackend
            cp -r ./node_modules/kero/snippets/gettingstarted/ ./snippets/kero/gettingstarted
            cp -r ./node_modules/kero/snippets/install/ ./snippets/kero/install
            cp -r ./node_modules/kero/snippets/knockout/ ./snippets/kero/knockout
            cp -r ./node_modules/kero/snippets/overview/ ./snippets/kero/overview
            cp -r ./node_modules/kero/snippets/row/ ./snippets/kero/row
            cp -r ./node_modules/kero/snippets/udatatable/ ./snippets/kero/udatatable
            cp -r ./node_modules/kero/snippets/validateapi/ ./snippets/kero/validateapi
            echo "====抓取 kero 文档成功===="
        ;;
        kero-fetch)
            cp -r ./node_modules/kero-fetch/docs/ ./snippets/kero-fetch/
            echo "====抓取 kero 文档成功===="
        ;;
        tinper-neoui)
        rm -r ./snippets/neoui/component
        rm -r ./snippets/neoui/plugin
           rm -r ./snippets/neoui/global
            cp -r ./node_modules/tinper-neoui/snippets/ ./snippets/neoui/
            echo "====抓取 tinper-neoui 文档成功===="
           ;;
       tinper-neoui-tree)
          cp -r ./node_modules/tinper-neoui-tree/snippets/ ./snippets/neoui/plugin/
          echo "====抓取 tinper-neoui-tree 文档成功===="
          ;;
    esac
done
